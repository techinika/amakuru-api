"use strict";
const express = require("express");
const AmakuruRoute = require("./api/amakuru.js");
const UsersRoute = require("./api/users.js");
const routes = express.Router();
routes.use("/amakuru", AmakuruRoute);
routes.use("/users", UsersRoute);
module.exports = routes;
//# sourceMappingURL=index.js.map