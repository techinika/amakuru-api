"use strict";
const express = require("express");
const { kinyarwanda } = require("../../controllers/getAllArticles");
const route = express.Router();
route.get("/", kinyarwanda);
module.exports = route;
//# sourceMappingURL=amakuru.js.map