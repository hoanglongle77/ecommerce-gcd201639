"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./newArrivals.module.css";

const NewArrivals = ({ data }) => {
  return (
    <section className={`container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4`}>
      <h2 className={`h3 pb-2 pb-sm-3`}>New Arrivals</h2>
      <div className={`row`}>
        <div className={`col-lg-4`}>
          <div
            className={`${styles.banner} d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5`}
          >
            <Image
              src="/images/laptop.png"
              alt="Laptop"
              width="320"
              height="345"
            />
            <h3 className="display-2 mb-2 text-white">MacBook</h3>
            <p className="text-white fw-medium mb-4">Be Pro Anywhere</p>
            <a className="btn btn-sm btn-primary" href="#">
              From $1,199
              <i className="ci-arrow-up-right fs-base ms-1 me-n1"></i>
            </a>
          </div>
        </div>
        <div
          className={`col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4`}
        >
          {data?.map((product) => (
            <ProductTag key={product.id} data={product} />
          ))}
        </div>
        <div
          className={`col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4`}
        >
          {data.map((product) => (
            <ProductTag key={product._id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductTag = ({ data }) => {
  const { name, price, images } = data;

  const staticRating = 4.5; // Example static rating

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Whole stars
    const halfStar = rating % 1 !== 0; // Half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Empty stars to make a total of 5

    return (
      <>
        {Array(fullStars).fill(
          <span className={`${styles.star} ${styles.starFull}`}>★</span>
        )}
        {halfStar && (
          <span className={`${styles.star} ${styles.starHalf}`}>★</span>
        )}
        {Array(emptyStars).fill(
          <span className={`${styles.star} ${styles.starEmpty}`}>★</span>
        )}
      </>
    );
  };
  return (
    <div
      className={`${styles.productTag} position-relative d-flex align-items-center ps-xl-3`}
    >
      <Image
        src={images?.[0]?.data}
        alt="Smart Watch"
        width="110"
        height="110"
      />

      <div className="w-100 min-w-0 ps-2 ps-sm-3">
        <div className="rating my-2">{renderStars(staticRating)}</div>
        <h4 className="mb-2">
          <Link
            className={`${styles.productNameLink} stretched-link d-block fs-sm fw-medium text-truncate`}
            href=""
          >
            {name}
          </Link>
        </h4>
        <div className="h5 mb-0">${price}</div>
      </div>
    </div>
  );
};

export default NewArrivals;
