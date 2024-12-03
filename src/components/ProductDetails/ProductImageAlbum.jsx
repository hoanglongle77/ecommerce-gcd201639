"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./productDetails.module.css";

const ProductImageAlbum = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0]?.data || "" // Default to the first image
  );

  return (
    <div className={`${styles.albumContainer}`}>
      <div className="product-album row">
        {/* Main Image Display */}
        <div className="col-12 col-md-8 col-lg-12 d-flex justify-content-center mb-4">
          <Image
            src={selectedImage}
            alt={product.name || "Product Image"}
            className="d-block w-100 rounded"
            width={400}
            height={400}
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="col-12 col-md-4 col-lg-12 d-flex flex-wrap justify-content-center align-items-start gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnailBtn} ${
                selectedImage === image.data ? "active" : ""
              }`}
              onClick={() => setSelectedImage(image.data)}
              style={{
                border: "none",
                background: "transparent",
                padding: "0",
                outline:
                  selectedImage === image.data ? "2px solid cyan" : "none",
              }}
            >
              <Image
                src={image.data}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail rounded"
                width={80}
                height={80}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageAlbum;
