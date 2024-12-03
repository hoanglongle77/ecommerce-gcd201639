"use client";
import React from "react";
import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import {
  AddShoppingCartRounded,
  AttachMoneyRounded,
} from "@mui/icons-material";
import styles from "./productCard.module.css";
import WishButton from "../../WishButton/WishButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductCard = ({ data }) => {
  const { addToCart } = useShoppingCart();
  const { name, brand, price, images, slug } = data;

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <div className={`card ${styles.productCard}`}>
      <Link
        href={`/products/${slug}`}
        passHref
        className={`${styles.productLink}`}
      >
        <Image
          src={images?.[0]?.data}
          className={`card-img-top`}
          alt={name}
          width="200"
          height="200"
        />
      </Link>
      <div className={`card-body w-100 min-w-0 px-0`}>
        <p className={`card-text text-muted mb-2`}>{brand}</p>
        <h3 className={`card-title pb-1 mb-2 fs-5`}>
          <span>{name}</span>
        </h3>
        <div className={`d-flex align-items-center justify-content-between`}>
          <p className={`card-text h5 mb-0`}>
            <strong className="d-flex align-items-center">
              <AttachMoneyRounded />
              {price}
            </strong>
          </p>
          {
            <div className="d-flex justify-content-between">
              <button
                className={`btn btn-primary me-2`}
                onClick={handleAddToCart}
              >
                <AddShoppingCartRounded />
              </button>

              <WishButton product={data} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
