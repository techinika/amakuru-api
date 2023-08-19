"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findLinksOnTheWeb_1 = __importDefault(require("../utilities/findLinksOnTheWeb"));
const getDataFromUrl_1 = __importDefault(require("../utilities/getDataFromUrl"));
/*
**
  "https://www.kigalitoday.com/sitemap.xml",
  "https://yegob.rw/post-sitemap31.xml",
  "https://igihe.com/sitemap.xml",
**
*/
let kinSitemapFiles = [
    "https://techinika.com/post-sitemap.xml",
    // "https://igihe.com/sitemap.xml",
];
let enSitemapFiles = [
    "https://yegob.rw/post-sitemap.xml",
    "https://www.newtimes.co.rw/sitemap.xml",
];
const ArticleController = {
    getKinyarwandaArticles: async (req, res, next) => {
        try {
            let links = await (0, findLinksOnTheWeb_1.default)(kinSitemapFiles);
            let data = await (0, getDataFromUrl_1.default)(links);
            console.log(data);
            res.status(200).json({ status: 200, data: data });
        }
        catch (error) {
            res.json({ status: 500, message: error.message });
        }
    },
};
exports.default = ArticleController;
//# sourceMappingURL=ArticleController.js.map