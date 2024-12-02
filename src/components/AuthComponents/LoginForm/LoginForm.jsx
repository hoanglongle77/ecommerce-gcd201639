"use client";
import React, { useActionState } from "react";
import Link from "next/link";
import styles from "./loginForm.module.css";
import { login } from "@/actions/auth";

const LoginForm = () => {
  const [state, formAction] = useActionState(login, undefined);

  return (
    <div className={`${styles.loginForm} card shadow`}>
      <div className={`card-body`}>
        <h4 className={`card-title text-center mb-4`}>Log In</h4>
        <form action={formAction}>
          <div className={`mb-3`}>
            <label className={`form-label`}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control`}
              required
            />
          </div>
          <div className={`mb-3`}>
            <label className={`form-label`}>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={`form-control`}
              required
            />
          </div>
          {state && state}
          <div className={`mb-4`}>
            <button type="submit" className={`btn btn-primary w-100`}>
              Log In
            </button>
          </div>
        </form>
        <p className={`text-center mb-2`}>
          You dont have an account?
          <Link href="/register" className={`text-decoration-none ms-1`}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
