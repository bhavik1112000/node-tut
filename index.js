const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("product", productSchema);
  const data = new Product({
    name: "iphone 16",
    price: 100000,
    brand: "apple",
    category: "mobile",
  });
  const result = await data.save();
  console.log(result);
};

// saveInDB();

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  const data = await Product.updateOne(
    { name: "iphone 16" },
    { $set: { price: 60000 } }
  );
  console.log(data);
};

// updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);

  const data = await Product.deleteOne({ name: "iphone 16" });
  console.log(data);
};

// deleteInDB();

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  const data = await Product.find();
  console.log(data);
};

findInDB();
