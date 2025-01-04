const Product = require("../models/product.model");
const Category = require("../models/category.model");
const { body, validationResult } = require("express-validator");

const addProduct = async (req, res) => {
  try {
    console.log("Category name provided:", req.body.category);
    const category = await Category.findOne({ name: req.body.category });
    console.log("Category found:", category);

    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    // const products = await Product.find().populate("category");
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getSingelProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Return the product details
    res.status(200).json(product);
  } catch (error) {
    console.error(error);

    // Handle invalid ObjectId errors
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    // Handle other server errors
    res.status(500).json({ error: "Server error" });
  }
}
const editProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const productId = req.params.id;
  const updates = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update product fields
    Object.keys(updates).forEach((key) => {
      product[key] = updates[key];
    });

    await product.save();
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addProduct, getProducts, editProduct, getSingelProduct };
