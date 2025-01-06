const Product = require("../models/product.model");
const Category = require("../models/category.model");
const { body, validationResult } = require("express-validator");
const slugify = require("slugify");

const addProduct = async (req, res) => {
  try {
    console.log("Category name provided:", req.body.category);
    const category = await Category.findOne({ name: req.body.category });
    console.log("Category found:", category);

    // Generate slug if not provided
    if (!req.body.slug) {
      req.body.slug =
        slugify(req.body.name, { lower: true, strict: true }) +
        "-" +
        Date.now();
    }
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const { category, price, brand } = req.query;
    const filters = {};

    if (category) {
      filters.category = category;
    }
    if (brand) {
      filters.brand = brand;
    }
    if (price) {
      const priceRange = price.split("-");
      filters.price = {
        $gte: parseInt(priceRange[0]),
        $lte: parseInt(priceRange[1]),
      };
    }
    const products = await Product.find(filters);
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
};
const getSingelProductslug = async (req, res) => {
  const productSlug = req.params.slug;

  try {
    // Find the product by ID
    const product = await Product.findOne({ slug: productSlug });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Return the product details
    res.status(200).json(product);
  } catch (error) {
    console.error(error);

    // // Handle invalid ObjectId errors
    // if (error.name === "CastError") {
    //   return res.status(400).json({ error: "Invalid product slug" });
    // }

    // Handle other server errors
    res.status(500).json({ error: "Server error slug" });
  }
};
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

    // Update slug if name changes
    if (updates.name) {
      product.slug = slugify(updates.name, { lower: true, strict: true });
    }

    await product.save();
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  editProduct,
  getSingelProduct,
  getSingelProductslug,
};
