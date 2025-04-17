// routes/alerts.js

const express = require("express");
const Alert = require("../models/Alert");
const router = express.Router();

// Fetch all alerts
router.get("/", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ createdAt: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
