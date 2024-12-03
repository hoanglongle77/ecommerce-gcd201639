import RegisterForm from "@/components/AuthComponents/RegisterForm/RegisterForm";
import React from "react";

const page = () => {
  return (
    <div
      className={`min-vh-100 d-flex justify-content-center align-items-center`}
    >
      <RegisterForm />
    </div>
  );
};

export default page;
