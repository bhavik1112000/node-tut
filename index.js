const express = require("express");
const product = require("./product");
require("./config");

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  const data = new product(req.body);
  let result = await data.save();
  // res.send("done");
  res.send(result);

  // console.log(req.body);
  console.log(result);
});

app.get("/products", async (req, res) => {
  const data = await product.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  const data = await product.deleteOne(req.params);
  console.log(data);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  const data = await product.updateOne(req.params, { $set: req.body });
  res.send(data);
  console.log(data);
});

app.listen("5000");
