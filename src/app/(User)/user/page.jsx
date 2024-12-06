import React from "react";
import { getUser } from "@/libs/dal";
import { redirect } from "next/navigation";
import ProfileForm from "@/layout/UI/Forms/ProfileForm/ProfileForm";

export const metadata = {
  title: "Profile Page",
  description: "Profile Page",
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
          <UserInfo user={user} />
          <ProfileForm user={user} />
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
};

const UserInfo = ({ user }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.username}</h5>
          <p className="card-text">{user.email}</p>
        </div>
      </div>
    </>
  );
};

export default page;
