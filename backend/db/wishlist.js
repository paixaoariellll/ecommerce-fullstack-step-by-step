const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  productId: Array(String),
});

const Whishlist = mongoose.model("whishlists", wishlistSchema);
module.export = Whishlist;
