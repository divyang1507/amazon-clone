const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");
const cors = require("cors");

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Middleware to parse JSON
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // Middleware to parse encoded url

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to the Express & MongoDB App!");
});

// Use routes
app.use("/api/user", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
module.exports = app;
