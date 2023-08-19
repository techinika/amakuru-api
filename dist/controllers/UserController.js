"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
var Languages;
(function (Languages) {
    Languages["Kiny"] = "kin";
    Languages["Eng"] = "eng";
})(Languages || (Languages = {}));
const UserController = {
    createUser: function (req, res, next) {
        res.status(201).send({ message: "User is created" });
    }
};
exports.default = UserController;
//# sourceMappingURL=UserController.js.map