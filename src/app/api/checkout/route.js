import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export async function POST(req) {
  try {
    const body = await req.json();
    const params = {
      client_reference_id: body.userId,
      customer_email: body.userEmail,
      payment_method_types: ["card"],
      mode: "payment",
      shipping_options: [
        { shipping_rate: "shr_1QRTauKBIXc1lqxZgCtn38tm" },
        { shipping_rate: "shr_1QRTa6KBIXc1lqxZF3MrgqTv" },
      ],
      shipping_address_collection: { allowed_countries: ["US", "VN"] },
      line_items: body.cartItems.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              metadata: {
                productId: item._id,
              },
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),

      success_url: `${req.headers.get("origin")}/payment-success`,
      cancel_url: `${req.headers.get("origin")}/?canceled=true`,
    };

    const session = await stripe.checkout.sessions.create(params);

    // Respond with the session object
    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
