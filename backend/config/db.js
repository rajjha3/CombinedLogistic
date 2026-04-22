const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error("MONGO_URL is not configured");
  }

  await mongoose.connect(mongoUrl);
  console.log("MongoDB connected");
};

module.exports = { connectDB };
