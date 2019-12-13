const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    price: { type: Number, default: 0 },
    imageurl: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
