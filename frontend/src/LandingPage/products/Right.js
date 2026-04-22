import React from "react";

function Right({ imageUrl, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row align-items-center g-4 px-2 px-md-0 py-4 py-md-5">
        <div className="col-12 col-lg-5 p-3 p-md-4 order-2 order-lg-1">
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "1.9" }}>
            {productDescription}
          </p>
          <div>
            <a href={learnMore || "#"} style={{ textDecoration: "none" }}>
              Learn More &nbsp;<i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-7 text-center order-1 order-lg-2">
          <img src={imageUrl} alt={productName} style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Right;
