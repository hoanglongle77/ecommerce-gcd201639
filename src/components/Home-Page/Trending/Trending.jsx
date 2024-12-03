"use client";
import React from "react";
import style from "./trending.module.css";
import Link from "next/link";
import ProductCard from "@/layout/UI/Cards/ProductCard/ProductCard";

const Trending = ({ data }) => {
  return (
    <section className={`container pt-5 mt-2 mt-sm-3 mt-lg-4`}>
      <Heading />
      <div className={`row g-4 pt-4`}>
        {data.map((product) => (
          <div
            className={`col-12 col-md-4 col-lg-4 col-xl-3`}
            key={product._id}
          >
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Heading = () => {
  return (
    <div
      className={`d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4`}
    >
      <h2 className={`h3 mb-0 fw-bold`}>Trending products</h2>
      <div className={`nav ms-3`}>
        <Link className={`nav-link px-0 py-2`} href="/products">
          <span>View all</span>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
