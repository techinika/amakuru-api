const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: 200, message: "You are getting all the news" });
});

module.exports = router;
