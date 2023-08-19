"use strict";
const express = require("express");
const usersControllers = require("../../controllers/users");
const route = express.Router();
route.get("/", usersControllers.getUsers);
route.get("/:id", usersControllers.getOneUser);
route.post("/", usersControllers.createUsers);
route.post("/all", usersControllers.bulkAddUsers);
route.put("/:id", usersControllers.updateUsers);
route.delete("/:id", usersControllers.deleteUsers);
module.exports = route;
//# sourceMappingURL=users.js.map