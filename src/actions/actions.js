"use server";
import { store } from "./storeApi";
import { getUser } from "@/libs/dal";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const updateProfile = async (formData) => {
  const { id, firstName, lastName, username } = Object.fromEntries(formData);

  try {
    await store.put(`/users/${id}`, {
      username: username,
      firstName: firstName,
      lastName: lastName,
    });
    revalidatePath("/user");
    return { success: true, message: "Profile updated successfully" };
  } catch (error) {
    return {
      success: false,
      message: `Failed to update profile: ${error.message}`,
    };
  }
};

export const getUserWishList = async () => {
  const user = await getUser();

  if (user == null) {
    redirect("/login");
  }

  try {
    const response = await store.get(`/users/${user._id}/wishlist`);
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: `Failed to get wishlist: ${error.message}`,
    };
  }
};

export const checkProductIsInWishList = async (productId) => {
  const user = await getUser();
  const response = await store.get(`/users/${user._id}/wishlist/${productId}`);
  return response.data;
};

export const addToWishList = async (productId) => {
  const user = await getUser();

  try {
    const check = await checkProductIsInWishList(productId);

    if (check.isInWishlist) {
      return {
        success: false,
        message: "Product is already in your wishlist",
      };
    }

    await store.post(`/users/${user._id}/wishlist`, {
      userId: user._id,
      productId: productId,
    });
    revalidatePath("/user/wish-list");

    return { success: true, message: "Add to wishlist successfully" };
  } catch (error) {
    return {
      success: false,
      message: `Failed to add to wishlist: ${error.message}`,
    };
  }
};

export const removeFromWishList = async (formData) => {
  const { id } = Object.fromEntries(formData);

  const user = await getUser();

  try {
    await store.delete(`/users/${user._id}/wishlist/${id}`);
    revalidatePath("/user/wish-list");
    return { success: true, message: "Remove from wishlist successfully" };
  } catch (error) {
    return {
      success: false,
      message: `Failed to remove from wishlist: ${error.message}`,
    };
  }
};
