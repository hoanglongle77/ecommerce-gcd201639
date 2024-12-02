"use server";
import { redirect } from "next/navigation";
import { store } from "./storeApi";
import { createSession, deleteSession } from "@/libs/session";
import { revalidatePath } from "next/cache";

export const register = async (formData) => {
  const { firstName, lastName, email, password, username } =
    Object.fromEntries(formData);

  try {
    await store.post("/auth/register", {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  } catch (error) {
    throw new Error(`Failed to register: ${error.message}`);
  }
  redirect("/login");
};

export const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    const response = await store.post("/auth/login", {
      email: email,
      password: password,
    });

    const { user } = response.data;

    if (!user.id || !user.id) {
      throw new Error("User data is invalid or missing.");
    }

    await createSession(user.id);
  } catch (error) {
    return "Email or password not match";
  }

  redirect("/");
};

export const logout = async () => {
  deleteSession();
  revalidatePath("/");
};
