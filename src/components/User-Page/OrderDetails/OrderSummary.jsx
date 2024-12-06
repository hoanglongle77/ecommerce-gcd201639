"use client";
import React from "react";
import styles from "./orderDetails.module.css";
import { AttachMoneyRounded, Summarize } from "@mui/icons-material";
import {
  calculateSubtotal,
  formatDateString,
  formatTime,
} from "@/libs/formatLibrary";

const OrderSummary = ({ data }) => {
  const total = calculateSubtotal(data.products);
  return (
    <>
      <div className={`${styles.orderSummary} mb-3`}>
        <h4 className="fw-bold d-flex align-items-center">
          <Summarize fontSize="large" className={`me-2`} /> Order Summary
        </h4>
        <div className={`d-flex justify-content-between align-items-center`}>
          <h5>Order Created</h5>
          <h6>{formatDateString(data.createdAt)}</h6>
        </div>
        <div className={`d-flex justify-content-between align-items-center`}>
          <h5>Order Time</h5>
          <h6>{formatTime(data.createdAt)}</h6>
        </div>
        <div className={`d-flex justify-content-between align-items-center`}>
          <h5>Subtotal</h5>
          <h6>${total}</h6>
        </div>
        <div className={`d-flex justify-content-between align-items-center`}>
          <h5>Delivery Fee</h5>
          <h6>${data.shippingRate / 100}</h6>
        </div>
      </div>
      <div
        className={`${styles.total} mb-3 d-flex justify-content-between align-items-center  `}
      >
        <h5 className="fw-bold d-flex align-items-center">
          <AttachMoneyRounded fontSize="large" className="me-2" /> Total
        </h5>
        <h6>${data.shippingRate / 100 + total}</h6>
      </div>
    </>
  );
};

export default OrderSummary;
