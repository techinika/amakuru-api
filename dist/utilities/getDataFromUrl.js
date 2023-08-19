"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
async function getContentsFromLinks(links) {
    const articleContents = [];
    for (let link of links) {
        try {
            const response = await axios_1.default.get(link);
            const htmlContent = response.data;
            const articleData = parseArticleData(htmlContent);
            articleData["link"] = link;
            articleContents.push(articleData);
        }
        catch (error) {
            console.error(`Error fetching content from link: ${link}`, error);
        }
    }
    console.log(articleContents);
    return articleContents;
}
function parseArticleData(htmlContent) {
    const $ = cheerio_1.default.load(htmlContent);
    const title = $(".entry-title .title-article").text().trim();
    const author = $(".entry-author .url .fn .spip_in").text().trim();
    const date = $(".updated .date_x").text().trim();
    const content = $(".entry-content .fulltext").text().trim();
    let image = $(".wp-post-image .img-responsive").first();
    if (image) {
        image = image.attr("src");
    }
    const articleData = {
        title,
        author,
        date,
        image,
        content,
    };
    return articleData;
}
exports.default = getContentsFromLinks;
//# sourceMappingURL=getDataFromUrl.js.map