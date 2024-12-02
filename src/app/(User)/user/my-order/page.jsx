import React from "react";
import { getUser } from "@/libs/dal";
import { redirect } from "next/navigation";

export const metadata = {
  title: "My Order Page",
  description: "My Order Page",
};

const page = async () => {
  let user = null;

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
          <h1>User's order history</h1>
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
};

export default page;
