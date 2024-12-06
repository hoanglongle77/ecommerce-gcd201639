import { getAllProducts } from "@/actions/data";
import ProductCard from "@/layout/UI/Cards/ProductCard/ProductCard";
import React from "react";

export const metadata = {
  title: "Products Page",
  description: "Products Page",
};

const page = async () => {
  const products = await getAllProducts();
  return (
    <div className={`container my-4`}>
      <div className={`row`}>
        {products.map((product) => (
          <div
            className={`col-12 col-md-4 col-lg-4 col-xl-3`}
            key={product._id}
          >
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
