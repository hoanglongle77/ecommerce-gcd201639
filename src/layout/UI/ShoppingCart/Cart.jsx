"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useShoppingCart(); // Get cart data and functions
  const [totalPrice, setTotalPrice] = useState(getTotalPrice()); // Keep track of total price

  useEffect(() => {
    setTotalPrice(getTotalPrice()); // Recalculate total price whenever cartItems change
  }, [cartItems, getTotalPrice]);

  // Update quantity and recalculate total price
  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
    setTotalPrice(getTotalPrice()); // Update total price after quantity change
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="card mb-3 shadow-sm p-3">
              <div className="row g-0">
                <div className="col-md-3">
                  <Image
                    src={item.images?.[0]?.data}
                    alt={item.name}
                    className="img-fluid rounded"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <div className="d-flex align-items-center mb-3">
                      <label className="me-2">Quantity:</label>
                      <input
                        type="number"
                        className="form-control w-auto"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item._id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end mt-4">
            <h4>Total: ${totalPrice}</h4>
          </div>
          <Link className="btn btn-primary" href="/checkout">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
