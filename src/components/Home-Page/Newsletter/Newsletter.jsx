"use client";
import React from "react";
import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={`mt-4 py-5 bg-secondary`}>
      <h3 className={`text-center text-white`}>Subcribe on PixelPort</h3>
      <p className={`pb-2 text-center text-white`}>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className={`${styles.newsletterForm} mx-auto`}>
        <div className={`d-flex`}>
          <div className={`me-1 flex-grow-1`}>
            <input
              className={`w-100 form-control`}
              placeholder="Your Email"
              type="email"
            />
          </div>
          <div>
            <button type="submit" className={`btn btn-primary`}>
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
