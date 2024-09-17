const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: Date,
  items: String,
  status: Number,
});

const Order = mongoose.model("rrders", orderSchema);
module.export = Order;
