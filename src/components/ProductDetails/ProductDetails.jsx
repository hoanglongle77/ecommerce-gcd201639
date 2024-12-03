"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductImageAlbum from "./ProductImageAlbum";
import ProductCard from "@/layout/UI/Cards/ProductCard/ProductCard";

const ProductDetails = ({ product }) => {
  return (
    <>
      <Tabs
        defaultActiveKey="genenral_Info"
        id="uncontrolled-tab-example"
        className="mb-3 container"
      >
        <Tab
          eventKey="genenral_Info"
          title="General Info"
          className="container "
        >
          <GeneralInfo product={product} />
        </Tab>
        <Tab
          eventKey="product_Details"
          title="Product Details"
          className="container"
        >
          <ProductDesc product={product} />
        </Tab>
      </Tabs>
    </>
  );
};

const GeneralInfo = ({ product }) => {
  return (
    <div className="row">
      <div className={`col-md-6`}>
        <ProductImageAlbum product={product} />
      </div>
      <div className={`col-md-6 col-xl-5 offset-xl-1 pt-4`}></div>
    </div>
  );
};

const ProductDesc = ({ product }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-9">
        <h4 className="fw-bold">Description</h4>
        <p>{product.description}</p>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <ProductCard data={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
