import React, { useEffect, useState } from "react";

import { apiClient } from "../api/client";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    const loadPositions = async () => {
      try {
        const response = await apiClient.get("/positions");
        setAllPositions(response.data);
        setStatus({ loading: false, error: "" });
      } catch (error) {
        setStatus({
          loading: false,
          error: error.response?.data?.message || "Unable to load positions.",
        });
      }
    };

    loadPositions();
    const interval = setInterval(loadPositions, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      {status.loading ? <p>Loading positions...</p> : null}
      {status.error ? <p className="loss">{status.error}</p> : null}

      {!status.loading && !status.error ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&amp;L</th>
                <th>Chg.</th>
              </tr>
            </thead>
            <tbody>
              {allPositions.map((stock) => {
                const currValue = stock.price * stock.qty;
                const isProfit = currValue - stock.avg * stock.qty >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={stock._id || `${stock.product}-${stock.name}`}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profClass}>
                      {(currValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default Positions;
