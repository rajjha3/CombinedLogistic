import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-6 text-center">
          <img src="Media/images/education.svg" alt="Education" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 p-3 p-md-5">
          <h1 className="fs-2 text-start">Free and open market education</h1>
          <p className="mt-4 mt-md-5">
            Varsity, the largest online stock market education book in the world covering everything from the basics to
            advanced trading.
          </p>
          <a href="/varsity" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>
          <p className="mt-4 mt-md-5">
            TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="/tradingqna" style={{ textDecoration: "none" }}>
            TradingQ&amp;A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
