const express = require("express");
const {
  registerUser,
  loginUser,
  viewUsers,
  deleteUser,
  profileUser
} = require("../controller/user.controller");
const { authenticateToken } = require("../middleware/authenticatetoken");

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/view", viewUsers);
router.delete("/delete/:id", deleteUser);
router.get("/profile", authenticateToken, profileUser);

module.exports = router;
