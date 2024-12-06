"use client";
import React from "react";
import styles from "./orderDetails.module.css";
import { LocalShipping } from "@mui/icons-material";

const DeliveryAddress = ({ data }) => {
  return (
    <div className={`${styles.deliveryAddress} mb-3`}>
      <h4 className="fw-bold d-flex align-items-center">
        <LocalShipping fontSize="large" className="me-2" /> Delivery Address
      </h4>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>Country</h5>
        <h6>{data.shippingAddress.country}</h6>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>City</h5>
        <h6>{data.shippingAddress.city}</h6>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>Street</h5>
        <h6>{data.shippingAddress.street}</h6>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>State</h5>
        <h6>{data.shippingAddress.state}</h6>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>Postal Code</h5>
        <h6>{data.shippingAddress.postalCode}</h6>
      </div>
    </div>
  );
};

export default DeliveryAddress;
