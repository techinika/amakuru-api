"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const xml2js_1 = require("xml2js");
// sitemap files
const getLinksFromSitemap = async (sitemaps) => {
    let data = [];
    for (let sitemap of sitemaps) {
        try {
            const response = await axios_1.default.get(sitemap);
            const sitemapContent = response.data;
            const sitemapObject = await parseXMLSitemap(sitemapContent);
            const urls = sitemapObject.urlset.url;
            const links = urls.map((url) => url.loc[0]);
            data = data.concat(links);
        }
        catch (error) {
            console.error(`Error fetching sitemap: ${sitemap}`, error);
        }
    }
    console.log(data);
    return data;
};
async function parseXMLSitemap(sitemapContent) {
    try {
        const sitemapObject = await (0, xml2js_1.parseStringPromise)(sitemapContent);
        return sitemapObject;
    }
    catch (error) {
        console.error("Error parsing sitemap XML", error);
        throw error;
    }
}
exports.default = getLinksFromSitemap;
//# sourceMappingURL=findLinksOnTheWeb.js.map