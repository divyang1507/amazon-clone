const express = require("express");
const { body, validationResult } = require("express-validator");
const {
  getProducts,
  addProduct,
  editProduct,
  getSingelProduct,
} = require("../controller/product.controller");

const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/getproducts", getProducts);
router.get("/getproduct/:id", getSingelProduct);
router.put(
  "/editproduct/:id",
  [
    body("name").optional().isString().withMessage("Name must be a string"),
    body("price").optional().isNumeric().withMessage("Price must be a number"),
    body("imageUrl").optional().isURL().withMessage("Image URL must be valid"),
    body("category")
      .optional()
      .isString()
      .withMessage("Category must be a string"),
    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string"),
    body("stock").optional().isNumeric().withMessage("Stock must be a number"),
  ],
  editProduct
);
module.exports = router;
