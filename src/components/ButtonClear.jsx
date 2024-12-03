"use client";
import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const ButtonClear = () => {
  const { clearCart } = useShoppingCart();

  return (
    <button onClick={clearCart} className="btn btn-danger">
      Clear Cart
    </button>
  );
};

export default ButtonClear;
