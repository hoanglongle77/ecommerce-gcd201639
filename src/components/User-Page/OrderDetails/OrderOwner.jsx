"use client";
import React from "react";
import styles from "./orderDetails.module.css";
import { Person } from "@mui/icons-material";

const OrderOwner = ({ data }) => {
  return (
    <div className={`${styles.orderOwner} mb-3`}>
      <h4 className="fw-bold d-flex align-items-center">
        <Person fontSize="large" className={`me-2`} /> Customer Info
      </h4>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>Email</h5>
        <h6>{data.user.email}</h6>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>Full Name</h5>
        <h6>
          {data.user.firstName} {data.user.lastName}
        </h6>
      </div>
    </div>
  );
};

export default OrderOwner;
