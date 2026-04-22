import React from "react";

function Left({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center g-4 px-2 px-md-0 py-4 py-md-5">
        <div className="col-12 col-lg-6 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-5 offset-lg-1 p-3 p-md-4">
          <h1 className="fs-3 text-muted">{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "1.9" }}>{productDescription}</p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo &nbsp; <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More &nbsp;<i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3 d-flex flex-column flex-sm-row align-items-start gap-3">
            <a href={googlePlay}>
              <img src="Media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="Media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
