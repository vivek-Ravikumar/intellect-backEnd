const express = require("express");
const Customer = require("../models/customer");
const CustomerTransaction = require("../models/customerTrasaction");

const transactionRouter = express.Router();

transactionRouter.post("/", async (req, res) => {
  const { cName, cNumber, products, billAmount } = req.body;
  if (cName && cNumber && products && billAmount) {
    try {
      const findCustomer = await Customer.find({ cName });
      if (findCustomer[0]) {
        const newCustomerTransaction = new CustomerTransaction({
          products,
          billAmount
        });
        const newTransResult = await newCustomerTransaction.save();
        if (newTransResult) {
          res.status(200).send({ status: "success" });
        }
      } else {
        const newCustomer = new Customer({ cName, cNumber });
        const result = await newCustomer.save();
        if (result) {
          const newCustomerTransaction = new CustomerTransaction({
            products,
            billAmount
          });
          const newTransResult = await newCustomerTransaction.save();
          if (newTransResult) {
            res.status(200).send({ status: "success" });
          }
        }
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ status: "something went wrong" });
    }
  } else {
    res.status(400).send({ status: "Unauthorized" });
  }
});

module.exports = transactionRouter;
