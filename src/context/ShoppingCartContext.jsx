"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

// Create the ShoppingCart context
const ShoppingCartContext = createContext();

// Custom hook to use the ShoppingCart context
export const useShoppingCart = () => useContext(ShoppingCartContext);

// ShoppingCartProvider component
export const ShoppingCartProvider = ({ children }) => {
  // Retrieve cart data from localStorage if available, or set an empty array
  const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(savedCartItems);

  // Use effect to update localStorage whenever cartItems change
  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) => item._id === product._id
      );

      if (existingProduct) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    toast.success("Product added to cart");
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
    toast.success("Product removed from cart");
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity to 0 or negative

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    // If cartItems is an empty array, return 0
    if (!cartItems || cartItems.length === 0) return 0;

    return cartItems.reduce((total, item) => {
      // Ensure item has a price and quantity
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;

      return total + itemPrice * itemQuantity;
    }, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
