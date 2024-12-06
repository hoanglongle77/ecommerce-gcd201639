"use client";
import React, { useEffect } from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const ClearCart = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return null;
};

export default ClearCart;
