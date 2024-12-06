import React from "react";
import { getUser } from "@/libs/dal";
import { redirect } from "next/navigation";
import { Receipt } from "@mui/icons-material";
import OrderList from "@/components/User-Page/OrderList/OrderList";

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
          <h1 className="d-flex align-items-center justify-content-center">
            <Receipt fontSize="large" className={`me-2`} /> My order history
          </h1>
          <OrderList data={user} />
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
};

export default page;
