import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container px-3 px-md-4 py-4 py-md-5">
      <div className="row text-center">
        <h1 className="fs-2 text-muted mb-3">Open a Zerodha Account</h1>
        <p className="text-muted mb-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&amp;O trades.
        </p>
        <div className="col-12 d-flex justify-content-center">
          <Link to="/signup" className="hero-cta p-3 btn btn-primary fs-5">
            SignUp For Free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
