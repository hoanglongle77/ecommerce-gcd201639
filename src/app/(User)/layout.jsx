import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Navbar/Navbar";
import { getUser } from "@/libs/dal";
import React from "react";
import { Toaster } from "react-hot-toast";

const StoreLayout = async ({ children }) => {
  let user = null;
  try {
    user = await getUser();
  } catch (error) {
    user = null;
  }

  return (
    <>
      <Navbar data={user} />
      <div className={`min-vh-100`}>
        {children}
        <Toaster />
      </div>
      <Footer />
    </>
  );
};

export default StoreLayout;
