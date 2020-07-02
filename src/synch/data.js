const Customer = require("../models/customer");
const Product = require("../models/product");
require("../config/db");
const customerData = [
  { name: "Dany", email: "dany@test.com" },
  { name: "Rohit", email: "rohit@test.com" },
  { name: "Satheesh", email: "satheesh@email.com" },
  { name: "Vimal", email: "vimal@email.com" }
];

const productData = [
  { pName: "Oil", price: 100 },
  { pName: "Surf", price: 200 },
  { pName: "Cake", price: 50 },
  { pName: "Rice", price: 1500 },
  { pName: "Hamam Soap", price: 30 },
  { pName: "AllClear Shampoo", price: 10 },
  { pName: "Colgate Brush", price: 20 },
  { pName: "Pepsodent Paste", price: 15 },
];

const ingestCustomerData = () => {
  customerData.map(async data => {
    const newCustomer = new Customer({
      name: data.name,
      email: data.email
    });
    try {
      const result = await newCustomer.save();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  });
};

//ingestCustomerData();

const ingestProductData = () => {
  productData.map(async data => {
    const newProduct = new Product({
      pName: data.pName,
      price: data.price
    });
    try {
      const result = await newProduct.save();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  });
};

ingestProductData();
