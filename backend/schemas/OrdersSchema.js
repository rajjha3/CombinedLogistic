const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { OrdersSchema };
