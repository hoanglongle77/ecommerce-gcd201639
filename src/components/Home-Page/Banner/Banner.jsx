import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <section className={`container my-4 text-center`}>
      <div className={`row`}>
        <div className={`${styles.bannerLeft} col-lg-3`}>
          <h1>20% SALE OFF</h1>
        </div>
        <div className={`${styles.bannerRight} col-lg-9`}>
          <div className={`d-flex flex-column`}>
            <h1>SEASONAL WEEKLY SALE 2024</h1>
            <p>
              Use code <strong>PIXELPORT</strong> to get best offer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
