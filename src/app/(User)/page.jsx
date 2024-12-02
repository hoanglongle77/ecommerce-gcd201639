import React from "react";
import Feature from "@/components/Home-Page/Features/Feature";
import NewArrivals from "@/components/Home-Page/NewArrivals/NewArrivals";
import Trending from "@/components/Home-Page/Trending/Trending";
import Banner from "@/layout/Banner/Banner";
import BrandList from "@/components/Home-Page/BrandList/BrandList";
import { brandList } from "@/Static-Data/brands";
import { getRandomProducts } from "@/actions/data";
import Newsletter from "@/components/Home-Page/Newsletter/Newsletter";
import { featuresList } from "@/Static-Data/features";
const page = async () => {
  const trending = await getRandomProducts();
  return (
    <div className={`mt-4`}>
      <Feature features={featuresList} />
      <Trending data={trending} />
      <BrandList data={brandList} />
      <Newsletter />
    </div>
  );
};

export default page;
