const express = require("express");

const {
  getHoldings,
  getPositions,
  getOrders,
  createOrder,
} = require("../controllers/tradingController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/holdings", protect, getHoldings);
router.get("/positions", protect, getPositions);
router.get("/orders", protect, getOrders);
router.post("/orders", protect, createOrder);

router.get("/allHoldings", protect, getHoldings);
router.get("/allPositions", protect, getPositions);
router.get("/allOrders", protect, getOrders);
router.post("/newOrder", protect, createOrder);

module.exports = router;
