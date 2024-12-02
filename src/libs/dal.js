import "server-only";

import { cookies } from "next/headers";
import { store } from "@/actions/storeApi";
import { decrypt } from "./session";
import { cache } from "react";
import { redirect } from "next/navigation";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session.userId) {
    redirect("/login");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const { data } = await store.get(`/users/${session.userId}`);

    if (!data || data.length === 0) {
      console.log("User data not found");
      return null;
    }

    const user = data;
    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
