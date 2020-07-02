const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const CustomerTransactionSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  products: [
    {
      pId: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: {
        type: Number
      }
    }
  ],
  billAmount: {
    type: Number,
    required: true
  }
});

const CustomerTransaction = model(
  "customertransaction",
  CustomerTransactionSchema
);
module.exports = CustomerTransaction;
