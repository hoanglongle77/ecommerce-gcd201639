"use client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { logout } from "@/actions/auth";
import CartButton from "../UI/CartButton/CartButton";

const Navbar = ({ data }) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "About us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          PIXELPORT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li> */}
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link href={link.href} className="nav-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-lg-row align-items-center">
            <CartButton />

            {data ? (
              <UserProfile user={data} />
            ) : (
              <div className="d-flex">
                <Link href="/login" className="btn btn-primary me-2">
                  Login
                </Link>
                <Link href="/register" className="btn btn-secondary">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const UserProfile = ({ user }) => {
  return (
    <div className="flex-shrink-0 dropdown">
      <a
        href="#"
        className="d-block link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"> */}
        {user?.username}
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li>
          <Link className="dropdown-item" href="/user">
            Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" href="/user/wish-list">
            Wishlist
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" href="/user/my-order">
            My Order
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <form className="dropdown-item" action={logout}>
            <button type="submit" className="btn btn-danger w-100">
              Logout
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
