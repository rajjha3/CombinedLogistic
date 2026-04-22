import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mt-5 pt-5">
        <div className="col-lg-8">
          <h1 className="fs-4 text-muted" style={{ lineHeight: "1.6" }}>
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>
      <div className="row mt-5 pt-5 border-top text-muted g-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        <div className="col-12 col-lg-6 pe-lg-5">
          <p className="mt-4">
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders
            and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a
            combination of Zero and Rodha, the Sanskrit word for barrier.
          </p>
          <p className="mt-4">
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </p>
          <p className="mt-4">
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment
            platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-lg-6 ps-lg-5">
          <p className="mt-4">
            In addition, we run a number of popular open online educational and community initiatives to empower retail
            traders and investors.
          </p>
          <p className="mt-4">
            <a href="" style={{ textDecoration: "none" }}>Rainmatter</a>, our fintech fund and incubator, has invested
            in several fintech startups with the goal of growing the Indian capital markets. And yet, we are always up
            to something new every day.
          </p>
          <p className="mt-4">
            Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our
            business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
