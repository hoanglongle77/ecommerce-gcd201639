"use server";
import { store } from "./storeApi";

export async function getAllProducts() {
  try {
    const response = await store.get("/products");
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

export async function getProductBySlug(slug) {
  try {
    const response = await store.get(`/products/slug/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch product with slug ${slug}: ${error.message}`
    );
  }
}

export async function getRandomProducts() {
  try {
    const response = await store.get("/products/random");
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

export async function getAllCategories() {
  try {
    const response = await store.get("/categories");
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }
}
