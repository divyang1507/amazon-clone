const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Category', // Referencing the Category model
    required: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

// Middleware to generate slug before saving
productSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, {
      lower: true, // Converts to lowercase
      strict: true, // Removes special characters
    });
  }
  next();
});

module.exports = mongoose.model("Product", productSchema);
