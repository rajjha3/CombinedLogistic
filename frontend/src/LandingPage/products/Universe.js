import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 text-center">
        <h1 className="fs-3 text-muted">The Zerodha Universe</h1>
        <p className="mt-3 mb-5" style={{ lineHeight: "1.9" }}>
          Extend your trading and investment experience even further with our partner platforms
        </p>

        <div className="col-12 col-sm-6 col-lg-4 p-3">
          <img src="Media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" style={{ width: "50%", padding: "5px" }} />
          <p className="text-muted text-small mt-3 p-2">
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3">
          <img src="Media/images/sensibullLogo.svg" alt="Sensibull" style={{ width: "40%", padding: "5px" }} />
          <p className="text-muted text-small mt-3 p-2">
            Options trading platform that lets you create strategies, analyze positions, and examine data points like
            open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3">
          <img src="https://zerodha.com/static/images/partners/tijori.svg" alt="Tijori" style={{ width: "35%" }} />
          <p className="text-muted text-small mt-2 p-2">
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-lg-5">
          <img src="Media/images/streakLogo.png" alt="Streak" style={{ width: "50%", padding: "5px" }} />
          <p className="text-muted text-small mt-3 p-2">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-lg-5">
          <img src="Media/images/smallcaseLogo.png" alt="Smallcase" style={{ width: "65%", padding: "5px" }} />
          <p className="text-muted text-small mt-3 p-2">
            Our asset management venture that is creating simple and transparent index funds to help you save for your
            goals.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-lg-5">
          <img src="Media/images/dittoLogo.png" alt="Ditto" style={{ width: "40%", padding: "5px" }} />
          <p className="text-muted text-small mt-4 p-2">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="universe-cta btn btn-primary fs-5 mt-5">SignUp Now</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
