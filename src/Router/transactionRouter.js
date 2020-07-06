const express = require("express");
const Customer = require("../models/customer");
const CustomerTransaction = require("../models/customerTrasaction");

const transactionRouter = express.Router();

transactionRouter.post("/", async (req, res) => {
  // console.log(req.body);
  const { cName, cNumber, products, billAmount } = req.body;
  if (cName && cNumber && products && billAmount) {
    try {
      const findCustomer = await Customer.find({ cNumber });
      if (findCustomer[0]) {
        const newCustomerTransaction = new CustomerTransaction({
          customer: findCustomer[0]._id,
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
            customer: result._id,
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

transactionRouter.get("/all", async (req, res) => {
  try {
    const allTransactions = await CustomerTransaction.find({})
      .populate({
        path: "customer",
        model: "customer"
      })
      .populate({
        path: "products",
        populate: { path: "pId", model: "products" }
      });

    res.status(200).send({ allTransactions, status: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "something went wrong" });
  }
});

module.exports = transactionRouter;
