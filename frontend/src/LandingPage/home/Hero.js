import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container px-3 px-md-4 py-4 py-md-5 mb-4 mb-md-5">
      <div className="row text-center align-items-center g-4">
        <div className="col-12">
          <img src="Media/images/homeHero.png" alt="Home Hero" className="mb-4 img-fluid" />
        </div>
        <div className="col-12">
          <h1 className="mt-md-4">Invest in Everything</h1>
          <p className="mb-4">Online platform to invest in stocks, derivatives and mutual funds</p>
          <Link to="/signup" className="hero-cta p-3 btn btn-primary fs-5">
            SignUp Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
