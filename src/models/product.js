const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  pName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    
  }
});

const Product = model("products", ProductSchema);
module.exports = Product;
