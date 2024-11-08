const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderName: {
    type: String,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart", // Assumes you have a Product model
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  itemCount: {
    type: Number,
    required: true,
  },
  orderPrice: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
