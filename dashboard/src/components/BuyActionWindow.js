import React, { useState, useContext } from "react";

import { apiClient } from "../api/client";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) {
      setErrorMessage("Enter a valid quantity and price.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      await apiClient.post("/orders", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      closeBuyWindow();
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Order failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(event) => setStockQuantity(event.target.value)}
              min="1"
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(event) => setStockPrice(event.target.value)}
              min="0"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required Rs {Number(stockQuantity * stockPrice).toFixed(2)}</span>

        <div>
          <button className="btn btn-blue" onClick={handleBuyClick} disabled={isSubmitting}>
            {isSubmitting ? "Placing..." : "Buy"}
          </button>

          <button className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>

      {errorMessage ? <p className="loss">{errorMessage}</p> : null}
    </div>
  );
};

export default BuyActionWindow;
