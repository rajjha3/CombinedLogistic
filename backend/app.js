const stockRoutes = require("./routes/stockRoutes");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const tradingRoutes = require("./routes/tradingRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: "StockBroker API",
    status: "ok",
    health: "/health",
    apiBase: "/api",
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api", tradingRoutes);
app.use("/api/stocks", stockRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = { app };
