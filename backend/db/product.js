const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  shortDescription: String,
  description: String,
  purchasePrice: Number,
  salePrice: Number,
  images: Array(String),
  categoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: "categories" }],
});

const Product = mongoose.model("products", productSchema);
module.export = Product;
