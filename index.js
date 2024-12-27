const express = require("express");
const product = require("./product");
require("./config");

const app = express();

app.use(express.json());

app.get("/search/:key", async (req, res) => {
  const data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.listen("5000");
