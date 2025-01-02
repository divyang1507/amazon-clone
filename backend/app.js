const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectDB = require("./db");
const userRoutes = require("./user.routes");

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true })); 

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to the Express & MongoDB App!");
});

// Use routes
app.use("/api", userRoutes);

module.exports = app;
