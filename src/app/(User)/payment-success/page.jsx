import ClearCart from "@/components/ClearCart";
import { getUser } from "@/libs/dal";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Payment Success",
  description: "Payment Success",
};

const page = async () => {
  let user = null;

  try {
    user = await getUser();
  } catch (error) {
    user = null;
  }
  return (
    <>
      {user ? (
        <div className={`container my-4`}>
          <h1 className={`text-center`}>Payment Successful</h1>
          <p className={`text-center`}>
            Thank you for your purchase. Your order has been successfully
          </p>
          <div className="d-flex justify-content-center">
            <Image
              src="/images/payment.png"
              width="200"
              height="200"
              alt="Payment"
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link href="/" className="btn btn-primary">
              Return to Home Page
            </Link>
          </div>
          <ClearCart />
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
};

export default page;
