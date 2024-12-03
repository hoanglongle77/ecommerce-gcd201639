import React from "react";
import { getProductBySlug, getRandomProducts } from "@/actions/data";
import Link from "next/link";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Trending from "@/components/Home-Page/Trending/Trending";
import Newsletter from "@/components/Home-Page/Newsletter/Newsletter";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const product = await getProductBySlug(slug);

  return {
    title: product.name,
    description: product.description,
  };
}

const page = async ({ params }) => {
  const slug = (await params).slug;
  const trending = await getRandomProducts();
  const product = await getProductBySlug(slug);

  return (
    <div className="mt-4">
      <h1 className={`h3 container mb-4`}>{product.name}</h1>
      <ProductDetails product={product} />
      <Trending data={trending} />
      <Newsletter />
    </div>
  );
};

export default page;
