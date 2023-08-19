"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ArticleController_1 = __importDefault(require("../../controllers/ArticleController"));
const route = express_1.default.Router();
route.get("/kin", ArticleController_1.default.getKinyarwandaArticles);
exports.default = route;
//# sourceMappingURL=amakuru.js.map