import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-6 p-3 p-md-5 text-center">
          <img src="Media/images/largestBroker.svg" alt="Largest broker" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 mt-lg-5">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-4 mb-md-5">
            With over 10 million clients, we are the largest stock broker in India. The most trusted and loved
            platform for trading and investing in:
          </p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul>
                <li><p>Future And Options</p></li>
                <li><p>Commodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li><p>Direct Mutual Funds</p></li>
                <li><p>Stocks and IPO&apos;s</p></li>
                <li><p>Bonds And Gold</p></li>
              </ul>
            </div>
          </div>
          <img src="Media/images/pressLogos.png" alt="Press logos" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
