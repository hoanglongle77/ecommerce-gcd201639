import React from "react";
import { getUser } from "@/libs/dal";
import { redirect } from "next/navigation";
import { getUserWishList } from "@/actions/actions";
import ProductCard from "@/layout/UI/Cards/ProductCard/ProductCard";
import Wishlist from "@/layout/UI/Wishlist/Wishlist";

export const metadata = {
  title: "Wish List Page",
  description: "Wish List Page",
};

const page = async () => {
  let user = null;
  const wishList = await getUserWishList();

  try {
    user = await getUser();
  } catch (error) {
    console.error("Error fetching user:", error.message || error);
    user = null;
  }

  return (
    <>
      {user ? (
        <div className={`container my-4`}>
          <h1 className="text-center mb-4">My Wishlist</h1>
          <Wishlist wishList={wishList} />
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
};

export default page;
