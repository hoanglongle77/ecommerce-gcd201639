import { getOrderById } from "@/actions/actions";
import DeliveryAddress from "@/components/User-Page/OrderDetails/DeliveryAddress";
import ItemsSummary from "@/components/User-Page/OrderDetails/ItemsSummary";
import OrderOwner from "@/components/User-Page/OrderDetails/OrderOwner";
import OrderSummary from "@/components/User-Page/OrderDetails/OrderSummary";

import React from "react";

// export async function generateMetadata({ params }) {
//   const slug = (await params).slug;
//   const order = await getCategoryBySlug(slug);

//   return {
//     title: category.name,
//     description: category.description,
//   };
// }

const page = async ({ params }) => {
  const id = (await params).slug;
  const order = await getOrderById(id);

  return (
    <div className={`container mt-4`}>
      <h3>Order Number #{order._id}</h3>
      <div className={`row`}>
        <div className="col-12 col-lg-7">
          <ItemsSummary data={order} />
          <DeliveryAddress data={order} />
        </div>
        <div className="col-12 col-lg-5">
          <OrderOwner data={order} />
          <OrderSummary data={order} />
        </div>
      </div>
    </div>
  );
};

export default page;
