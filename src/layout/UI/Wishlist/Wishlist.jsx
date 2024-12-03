"use client";
import { removeFromWishList } from "@/actions/actions";
import React, { useTransition } from "react";
import { Delete } from "@mui/icons-material";
import toast from "react-hot-toast";
import Link from "next/link";

const Wishlist = ({ wishList }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    startTransition(async () => {
      const result = await removeFromWishList(formData);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Brand</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {wishList.length > 0 ? (
          wishList.map((product, index) => (
            <tr key={product._id}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>${product.price}</td>
              <td className={`d-flex`}>
                <Link
                  className="btn btn-primary btn-sm"
                  href={`/products/${product.slug}`}
                >
                  Details
                </Link>
                <form onSubmit={handleDelete}>
                  <input type="hidden" name="id" value={product._id} />
                  <button
                    className={`btn btn-danger btn-sm ms-2 d-flex align-items-center`}
                    disabled={isPending}
                  >
                    <Delete />
                    {isPending ? "Removing..." : "Remove"}
                  </button>
                </form>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              Your wishlist is empty
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Wishlist;
