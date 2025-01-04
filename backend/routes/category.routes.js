const express = require("express");
const {
  getCategories,
  addCategory,
} = require("../controller/category.controller");

const router = express.Router();

router.post("/addcat", addCategory);
router.get("/getcat", getCategories);

module.exports = router;
