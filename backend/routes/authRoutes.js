const express = require("express");
const { body } = require("express-validator");
const authLimiter = require("../middleware/rateLimiter");

const router = express.Router();

const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getProfile,
} = require("../controllers/authcontroller");

const { protect } = require("../middleware/authMiddleware");

// Register Route
router.post(
  "/register",
  authLimiter,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

// Login Route
router.post(
  "/login",
  authLimiter,
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

// Forgot Password Route
router.post(
  "/forgot-password",
  authLimiter,
  [
    body("email").isEmail().withMessage("Enter a valid email"),
  ],
  forgotPassword
);

// Reset Password Route
router.post(
  "/reset-password/:token",
  authLimiter,
  [
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  resetPassword
);

// Protected Profile Route
router.get("/profile", protect, getProfile);

module.exports = router;