const express = require("express");
const cors = require("cors");
const transactionRouter = require("./Router/transactionRouter");
const productRouter = require("./Router/productRouter");

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
app.use("/api/transaction", transactionRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hi from the server");
});

app.listen(3000, () => {
  console.log("server is up and running");
});
