import LoginForm from "@/components/AuthComponents/LoginForm/LoginForm";
import React from "react";

const page = async () => {
  return (
    <div
      className={`min-vh-100 d-flex justify-content-center align-items-center`}
    >
      <LoginForm />
    </div>
  );
};

export default page;
