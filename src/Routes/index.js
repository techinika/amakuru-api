const express = require("express");
const AmakuruRoute = require("./Amakuru.js");

const routes = express.Router();

routes.get("/amakuru", AmakuruRoute);

module.exports = routes;
