import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-4">
          <h1 className="mb-4 fs-2">Unbeatable Pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden
            charges.
          </p>
          <a href="/pricing" style={{ textDecoration: "none" }}>
            View Pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row text-center g-3">
            <div className="col-12 col-sm-6">
              <div className="p-3 border h-100">
                <h1 className="mb-3">₹0</h1>
                <p className="mt-2">Free equity delivery and direct mutual funds</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="p-3 border h-100">
                <h1 className="mb-3">₹20</h1>
                <p className="mt-2">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
