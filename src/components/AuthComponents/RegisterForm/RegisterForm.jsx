"use client";
import React from "react";
import Link from "next/link";
import styles from "./registerForm.module.css";
import { register } from "@/actions/auth";

const RegisterForm = () => {
  return (
    <div className={`${styles.registerForm} card shadow mx-auto`}>
      <div className={`card-body`}>
        <h4 className={`card-title text-center mb-4`}>Register</h4>
        <form action={register}>
          <div className={`row gx-2`}>
            <div className={`col-6 mb-3`}>
              <label className={`form-label`}>First name</label>
              <input
                type={`text`}
                className={`form-control`}
                placeholder={`First name`}
                id="firstName"
                name="firstName"
                required
              />
            </div>
            <div className={`col-6 mb-3`}>
              <label className={`form-label`}>Last name</label>
              <input
                type={`text`}
                className={`form-control`}
                placeholder={`Last name`}
                id="lastName"
                name="lastName"
                required
              />
            </div>
          </div>
          <div className={`mb-3`}>
            <label className={`form-label`}>Username</label>
            <input
              type="text"
              className={`form-control`}
              id="username"
              name="username"
              required
            />
          </div>
          <div className={`mb-3`}>
            <label className={`form-label`}>Email</label>
            <input
              type="email"
              className={`form-control`}
              id="email"
              name="email"
              required
            />
          </div>
          <div className={`mb-3`}>
            <label className={`form-label`}>Password</label>
            <input
              type="password"
              className={`form-control`}
              id="password"
              name="password"
              required
            />
          </div>
          <div className={`mb-4`}>
            <button type="submit" className={`btn btn-primary w-100`}>
              Register
            </button>
          </div>
        </form>
        <p className={`text-center mb-2`}>
          Already have account ?
          <Link href="/login" className={`text-decoration-none ms-1`}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
