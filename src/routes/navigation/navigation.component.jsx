import React from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <Logo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
          <Link className="nav-link" to="/cart">
            CART
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
