"use client";
import { formatPrice } from "@/libs/formatLibrary";
import React from "react";

const ItemsSummary = ({ data }) => {
  return (
    <div className={`table-responsive `}>
      <table className="table table-hover table-bordered">
        <thead className={`thead-dark`}>
          <tr>
            <th>#</th>
            <th>Items Summary</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.products.length > 0 ? (
            data.products.map((item, index) => (
              <tr key={item.product._id}>
                <td>{index + 1}</td>
                <td>{item.product.name}</td>
                <td>{item.quantity}</td>
                <td>${item.product.price}</td>
                <td>${item.quantity * item.product.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsSummary;
