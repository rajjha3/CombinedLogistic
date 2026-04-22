const YahooFinance = require("yahoo-finance2").default;

const asyncHandler = require("../middleware/asyncHandler");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");
const { seedStarterPortfolio } = require("../utils/seedPortfolio");

const yahooFinance = new YahooFinance();

const SYMBOL_ALIASES = {
  HUL: "HINDUNILVR",
};

const buildAccessFilter = (user) => (
  user.role === "admin" ? {} : { owner: user._id }
);

const ensureScopedPortfolioData = async (user, Model) => {
  const accessFilter = buildAccessFilter(user);
  let documents = await Model.find(accessFilter);

  if (user.role !== "admin" && documents.length === 0) {
    await seedStarterPortfolio(user._id);
    documents = await Model.find({ owner: user._id });
  }

  return documents;
};

const resolveLiveSymbol = (symbol = "") => {
  const normalizedSymbol = symbol.trim().toUpperCase();
  const mappedSymbol = SYMBOL_ALIASES[normalizedSymbol] || normalizedSymbol;

  return mappedSymbol.endsWith(".NS") ? mappedSymbol : `${mappedSymbol}.NS`;
};

const formatPercent = (value) => `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;

const enrichWithLiveMarketData = async (documents) => {
  const enrichedDocuments = await Promise.all(
    documents.map(async (document) => {
      const item = document.toObject ? document.toObject() : { ...document };

      try {
        const quote = await yahooFinance.quote(resolveLiveSymbol(item.name));
        const livePrice = Number(quote.regularMarketPrice);
        const dayPercent = Number(quote.regularMarketChangePercent);
        const isPriceValid = Number.isFinite(livePrice) && livePrice > 0;
        const isDayPercentValid = Number.isFinite(dayPercent);
        const netPercent = isPriceValid
          ? ((livePrice - Number(item.avg)) / Number(item.avg)) * 100
          : Number.NaN;

        return {
          ...item,
          price: isPriceValid ? livePrice : Number(item.price),
          day: isDayPercentValid ? formatPercent(dayPercent) : item.day,
          net: Number.isFinite(netPercent) ? formatPercent(netPercent) : item.net,
          isLoss: Number(quote.regularMarketChange) < 0,
        };
      } catch (error) {
        return item;
      }
    })
  );

  return enrichedDocuments;
};

const getHoldings = asyncHandler(async (req, res) => {
  const holdings = await ensureScopedPortfolioData(req.user, HoldingsModel);
  const liveHoldings = await enrichWithLiveMarketData(holdings);
  res.json(liveHoldings);
});

const getPositions = asyncHandler(async (req, res) => {
  const positions = await ensureScopedPortfolioData(req.user, PositionsModel);
  const livePositions = await enrichWithLiveMarketData(positions);
  res.json(livePositions);
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await OrdersModel.find(buildAccessFilter(req.user)).sort({
    createdAt: -1,
  });

  res.json(orders);
});

const createOrder = asyncHandler(async (req, res) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    res.status(400);
    throw new Error("Name, qty, price, and mode are required");
  }

  const order = await OrdersModel.create({
    name,
    qty: Number(qty),
    price: Number(price),
    mode,
    owner: req.user._id,
  });

  res.status(201).json({
    message: "Order created successfully",
    order,
  });
});

module.exports = {
  getHoldings,
  getPositions,
  getOrders,
  createOrder,
};
