"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const amakuru_1 = __importDefault(require("./api/amakuru"));
const users_1 = __importDefault(require("./api/users"));
const routes = express_1.default.Router();
routes.use("/amakuru", amakuru_1.default);
routes.use("/users", users_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map