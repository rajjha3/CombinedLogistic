import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240, 240, 240)" }}>
      <div className="container border-top mt-5 p-4">
        <div className="row mt-5 g-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <img src="/Media/images/logo.svg" alt="Zerodha logo" style={{ width: "160px", maxWidth: "100%" }} />
            <p>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h5>Company</h5>
            <a href="">Philosophy</a>
            <br />
            <a href="">Press &amp; media</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Zerodha Cares (CSR)</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Open source</a>
            <br />
            <a href="">Referral program</a>
            <br />
            <a href="">About</a>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h5>Products</h5>
            <a href="">Stocks</a>
            <br />
            <a href="">Options</a>
            <br />
            <a href="">Futures</a>
            <br />
            <a href="">Mutual funds</a>
            <br />
            <a href="">Direct mutual funds</a>
            <br />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h5>Support</h5>
            <a href="">Contact us</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href="">Bulletin</a>
            <br />
            <a href="">Circular</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">Downloads</a>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI – SEBI Registration no.: INZ000031633
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com.
          </p>

          <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
            Speedy redressal of the grievances.
          </p>

          <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
            Investments in securities market are subject to market risks; read all the related documents carefully
            before investing.
          </p>

          <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge
            in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock
            broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile
            number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued
            by NSDL/CDSL every month.
          </p>

          <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
            India&apos;s largest broker based on networth as per NSE. NSE broker factsheet.
          </p>

          <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock
            brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of
            the day. KYC is one time exercise while dealing in securities markets and does not need to be repeated with
            every intermediary.
          </p>

          <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px" }}>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited |
            IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange
            investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>

          <div className="row border-top pt-3 mt-4 text-muted" style={{ fontSize: "13px", fontWeight: "500" }}>
            <div className="col text-center footer-market-links">
              <a href="" className="mx-2 text-decoration-none text-muted">NSE</a>
              <a href="" className="mx-2 text-decoration-none text-muted">BSE</a>
              <a href="" className="mx-2 text-decoration-none text-muted">MCX</a>
              <a href="" className="mx-2 text-decoration-none text-muted">Terms &amp; conditions</a>
              <a href="" className="mx-2 text-decoration-none text-muted">Policies &amp; procedures</a>
              <a href="" className="mx-2 text-decoration-none text-muted">Privacy policy</a>
              <a href="" className="mx-2 text-decoration-none text-muted">Disclosure</a>
              <a href="" className="mx-2 text-decoration-none text-muted">For investor&apos;s attention</a>
              <a href="" className="mx-2 text-decoration-none text-muted">Investor charter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
