import React from "react";
import { Link } from "react-router-dom";

import { getDashboardUrl } from "../config";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="Media/images/logo.svg" alt="logo" />
        </Link>

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

        <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">
                Create account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href={getDashboardUrl("/login")}>
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
