"use client";
import { addToWishList } from "@/actions/actions";
import { Favorite } from "@mui/icons-material";
import toast from "react-hot-toast";
import React from "react";
import { useRouter } from "next/navigation";

const WishButton = ({ product }) => {
  const router = useRouter();
  const { _id } = product;
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const result = await addToWishList(_id);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Please login first");
      router.push("/login");
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <button className={`btn btn-danger`} type="submit">
        <Favorite />
      </button>
    </form>
  );
};

export default WishButton;
