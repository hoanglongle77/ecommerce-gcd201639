"use client";
import React from "react";
import styles from "./brandList.module.css";

const BrandList = ({ data }) => {
  return (
    <section className={`${styles.brandList} container`}>
      <div className={`row`}>
        {data?.map((brand, index) => (
          <div key={index} className={`col-6 col-md-3 col-lg-2`}>
            <div className={`${styles.brandItem} text-center mb-4`}>
              {brand.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandList;
