"use client";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "@/actions/actions";

const ProfileForm = ({ user }) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    startTransition(async () => {
      const result = await updateProfile(formData);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={user?._id} />
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          defaultValue={user?.username}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          defaultValue={user?.firstName}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          defaultValue={user?.lastName}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isPending}>
        {isPending ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default ProfileForm;
