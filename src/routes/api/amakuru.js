const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ status: 200, message: "You are getting all the news" });
});

module.exports = route;
