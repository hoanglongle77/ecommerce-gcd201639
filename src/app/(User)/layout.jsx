import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Navbar/Navbar";
import React from "react";

const UserLayout = async ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={`min-vh-100`}>{children}</div>
      <Footer />
    </>
  );
};

export default UserLayout;
