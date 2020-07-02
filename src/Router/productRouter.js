const express = require("express");
const productRouter = express.Router();
const Product = require("../models/product");
require("../config/db");
productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    if (products) {
      res.status(200).send({ products });
    } else {
      res.status(500).send({ status: "something went wrong" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "something went wrong" });
  }
});

module.exports = productRouter;
