// backend/routes/stockRoutes.js

const express = require("express");
const router = express.Router();
const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance();

router.get("/", (req, res) => {
  res.json({ message: "Stocks route working" });
});

router.get("/price/:symbol", async (req, res) => {
  try {
    const requestedSymbol = decodeURIComponent(req.params.symbol || "")
      .trim()
      .toUpperCase();

    if (!requestedSymbol) {
      return res.status(400).json({ error: "Stock symbol is required" });
    }

    const symbol = requestedSymbol.endsWith(".NS")
      ? requestedSymbol
      : `${requestedSymbol}.NS`;

    const quote = await yahooFinance.quote(symbol);

    res.json({
      symbol: requestedSymbol,
      price: quote.regularMarketPrice,
      change: quote.regularMarketChange,
      percent: quote.regularMarketChangePercent,
    });
  } catch (error) {
    console.error("Yahoo Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
