import { store } from "@/actions/storeApi";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export const POST = async (req) => {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("Stripe-Signature");

    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const customerInfo = {
        userId: session?.client_reference_id,
        email: session?.customer_email,
      };

      const shippingAddress = {
        street: session?.shipping_details?.address?.line1,
        city: session?.shipping_details?.address?.city,
        state: session?.shipping_details?.address?.state,
        postalCode: session?.shipping_details?.address?.postal_code,
        country: session?.shipping_details?.address?.country,
      };

      const retrieveSession = await stripe.checkout.sessions.retrieve(
        session.id,
        { expand: ["line_items.data.price.product"] }
      );

      const lineItems = await retrieveSession?.line_items?.data;

      const orderItems = lineItems?.map((item) => {
        return {
          product: item.price.product.metadata.productId,
          quantity: item.quantity,
        };
      });

      const shippingRate = await stripe.shippingRates.retrieve(
        session?.shipping_cost?.shipping_rate
      );

      await store.post("/orders/", {
        user: customerInfo.userId,
        products: orderItems,
        shippingAddress,
        shippingRate: shippingRate.fixed_amount.amount,
        totalAmount: session.amount_total ? session.amount_total / 100 : 0,
      });
    }

    return new NextResponse("Order created", { status: 200 });
  } catch (err) {
    console.log("[webhooks_POST]", err);
    return new NextResponse("Failed to create the order", { status: 500 });
  }
};
