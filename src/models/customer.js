const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const CustomerSchema = new Schema({
  cName: {
    type: String,
    required: true
  },
  cNumber: {
    type: String,
    required: true,
    unique: true
  }
});

const Customer = model("customer", CustomerSchema);
module.exports = Customer;
