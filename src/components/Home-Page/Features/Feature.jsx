"use client";
import React from "react";
import styles from "./features.module.css";

const Feature = ({ features }) => {
  return (
    <div className="container pt-5 mt-1 mt-sm-3 mt-lg-4">
      <div className="row">
        {features.map((feature, index) => (
          <div className="col-6 col-md-6 col-lg-3" key={index}>
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }) => {
  const { icon, title, desc } = feature;
  return (
    <div
      className={`${styles.featureCard} d-flex flex-column flex-xxl-row align-items-center`}
    >
      <div className="p-4 mb-3 mb-xxl-0">{icon}</div>
      <div className={`${styles.content} text-center text-xxl-start ps-xxl-3`}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
