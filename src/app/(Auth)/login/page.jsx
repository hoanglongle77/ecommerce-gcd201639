import LoginForm from "@/components/AuthComponents/LoginForm/LoginForm";
import React from "react";

const page = async () => {
  return (
    <div className={`d-flex justify-content-center align-items-center`}>
      <LoginForm />
    </div>
  );
};

export default page;
