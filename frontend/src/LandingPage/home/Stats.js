import React from "react";

function Stats() {
  return (
    <div className="container p-3 mb-5">
      <div className="row align-items-center p-3 g-4">
        <div className="col-12 col-lg-6 p-3 p-md-5">
          <h1 className="fs-2 mb-5 text-muted text-start">Trust with confidence</h1>

          <h2 className="fs-4 text-start">Customer-first always</h2>
          <p className="text-muted text-start">
            That&apos;s why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us
            India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4 text-start">No spam or gimmicks</h2>
          <p className="text-muted text-start">
            No gimmicks, spam, gamification, or annoying push notifications. High quality apps that you use at your
            pace, the way you like. Our philosophies.
          </p>

          <h2 className="fs-4 text-start">The Zerodha universe</h2>
          <p className="text-muted text-start">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored
            services specific to your needs.
          </p>

          <h2 className="fs-4 text-start">Do better with money</h2>
          <p className="text-muted text-start">
            With initiatives like Nudge and Kill Switch, we don&apos;t just facilitate transactions, but actively help you
            do better with your money.
          </p>
        </div>
        <div className="col-12 col-lg-6 p-3 text-center">
          <img src="Media/images/ecosystem.png" alt="Ecosystem" style={{ width: "85%" }} />
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore Products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
