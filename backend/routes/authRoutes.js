const express = require("express");

const {
  registerUser,
  loginUser,
  getCurrentUser,
  listUsers,
} = require("../controllers/authController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getCurrentUser);
router.get("/users", protect, authorizeRoles("admin"), listUsers);

module.exports = router;
