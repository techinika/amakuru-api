const express = require("express");
const AmakuruRoute = require("./api/amakuru.js");

const routes = express.Router();

routes.use("/amakuru", AmakuruRoute);

module.exports = routes;
