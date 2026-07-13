const express = require("express");
const { generateProductDescription } = require("../controllers/aiController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Generate AI Product Description
router.post("/generate", protect, generateProductDescription);

module.exports = router;