"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const amakuru_js_1 = __importDefault(require("./api/amakuru.js"));
const users_js_1 = __importDefault(require("./api/users.js"));
const routes = express_1.default.Router();
routes.use("/amakuru", amakuru_js_1.default);
routes.use("/users", users_js_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map