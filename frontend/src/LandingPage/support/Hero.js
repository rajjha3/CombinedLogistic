import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-4 p-md-5 mb-3" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-3 p-md-5 align-items-start">
        <div className="col-12 col-lg-6 p-3 p-md-5 support-links">
          <h1 className="fs-3">Search for an answer or browse help topics to create</h1>
          <input placeholder="Eg. how do I activate F&amp;O" />
          <div className="d-flex flex-wrap gap-3">
            <a href="">Track Account Opening</a>
            <a href="">Track Segment Activation</a>
            <a href="">Intraday Margins</a>
            <a href="">Kite User Manual</a>
          </div>
        </div>
        <div className="col-12 col-lg-5 offset-lg-1 p-3 p-md-5 support-featured">
          <h1 className="mb-4">Featured</h1>
          <ol className="support-featured-list">
            <li>
              <a href="">Current Takeovers and Delisting-January 2024</a>
            </li>
            <li>
              <a href="">Track Segment activated</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
