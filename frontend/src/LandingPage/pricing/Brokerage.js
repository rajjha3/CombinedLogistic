function Brokerage() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-5 border-top g-4 align-items-start">
        <div className="col-12 col-lg-8">
          <a href="">
            <h3 className="fs-5 mt-3 p-2 p-md-4">Brokerage Calculator</h3>
          </a>
          <ul className="text-muted" style={{ lineHeight: "1.6rem" }}>
            <li>Securities/Commodities transaction tax</li>
            <li>Transaction/Turnover Charges</li>
            <li>DP (Depository participant) charges</li>
            <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            <li>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.</li>
            <li>BSE has revised transaction charges for group A, B and other non exclusive scrips at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</li>
            <li>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</li>
            <li>Debit transactions of mutual funds &amp; bonds get an additional discount of ₹0.25 on the CDSL fee.</li>
          </ul>
        </div>
        <div className="col-12 col-lg-4">
          <a href="">
            <h3 className="fs-5 mt-3 p-2 p-md-4 text-lg-center">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
