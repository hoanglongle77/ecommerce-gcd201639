"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ShoppingCartRounded } from "@mui/icons-material";
import { useShoppingCart } from "@/context/ShoppingCartContext";

function CartButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`me-3`}>
      <Button variant="primary" onClick={handleShow}>
        <ShoppingCart />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2 className="text-center d-flex align-items-center">
              <ShoppingCartRounded fontSize="large" className="me-2" />
              Shopping Cart
            </h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={`p-4`}>
          <CartBody />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

const CartBody = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useShoppingCart();
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [cartItems, getTotalPrice]);

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
    setTotalPrice(getTotalPrice());
  };

  return (
    <>
      <div className={`d-flex flex-column gap-4 pt-2`}>
        {cartItems.length === 0 ? (
          <p className={`text-center`}>Your cart is empty</p>
        ) : (
          <div className={`d-flex flex-column gap-4 pt-2`}>
            {cartItems.map((item) => (
              <div key={item._id} className={`d-flex align-items-center`}>
                <Image
                  src={item.images?.[0]?.data}
                  alt={item.name}
                  className="img-fluid rounded"
                  width="150"
                  height="150"
                />
                <div className={`w-100 min-w-0 ps-2 ps-sm-3`}>
                  <h5 className={`d-flex animate-underline mb-2`}>
                    {item.name}
                  </h5>
                  <div className={`h6 pb-1 mb-2`}>${item.price}</div>
                  <div
                    className={`d-flex align-items-center justify-content-between`}
                  >
                    <input
                      type="number"
                      className="form-control w-50 "
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item._id, parseInt(e.target.value))
                      }
                    />

                    <button
                      className="btn-close fs-sm"
                      onClick={() => removeFromCart(item._id)}
                    ></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`mt-2 d-flex flex-column align-items-start`}>
        <div
          className={`d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4`}
        >
          <span className={`text-light-emphasis`}>Subtotal:</span>
          <span className={`h6 mb-0`}>${totalPrice}</span>
        </div>
        <div className={`d-flex w-100 gap-3`}>
          <Link href="/cart" className={`btn btn-lg btn-secondary w-100`}>
            View Cart
          </Link>
          <Link
            className={`btn btn-lg btn-primary w-100`}
            href="/cart/checkout"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartButton;
