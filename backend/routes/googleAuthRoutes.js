const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", { session: false }, (err, user) => {
    if (err) {
      console.error("Passport Error:", err);
      return res.status(500).json(err);
    }

    if (!user) {
      console.log("No user returned by Passport");
      return res.redirect("http://localhost:5173/login");
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("JWT Created Successfully");
    console.log("Redirecting to Google Success...");

    return res.redirect(
      `http://localhost:5173/google-success?token=${token}`
    );
  })(req, res, next);
});

module.exports = router;