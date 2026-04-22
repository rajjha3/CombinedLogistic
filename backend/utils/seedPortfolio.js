const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { defaultHoldings, defaultPositions } = require("./defaultPortfolio");

const seedStarterPortfolio = async (userId) => {
  const [existingHoldings, existingPositions] = await Promise.all([
    HoldingsModel.countDocuments({ owner: userId }),
    PositionsModel.countDocuments({ owner: userId }),
  ]);

  if (existingHoldings === 0) {
    await HoldingsModel.insertMany(
      defaultHoldings.map((holding) => ({
        ...holding,
        owner: userId,
      }))
    );
  }

  if (existingPositions === 0) {
    await PositionsModel.insertMany(
      defaultPositions.map((position) => ({
        ...position,
        owner: userId,
      }))
    );
  }
};

module.exports = { seedStarterPortfolio };
