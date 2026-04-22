import React from "react";

function Hero() {
  return (
    <div className="container p-5 border-bottom mb-5  ">
      <div className="row text-center">
        <h1 className="mt-5  fs-1 text-muted p-2">Zerodha Products</h1>
        <h3 className="p-2 fs-2 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mb-5 p-3" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
