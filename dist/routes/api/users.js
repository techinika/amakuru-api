"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../../controllers/UserController"));
const route = express_1.default.Router();
route.post("/create", UserController_1.default.createUser);
route.get("/all", UserController_1.default.getUsers);
route.get("/:email", UserController_1.default.getOneUser);
route.delete("/:email", UserController_1.default.deleteUser);
route.patch("/:email", UserController_1.default.updateUser);
exports.default = route;
//# sourceMappingURL=users.js.map