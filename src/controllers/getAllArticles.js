const getLinksFromSitemap = require("../utilities/findLinksOnTheWeb");
const getContentsFromLinks = require("../utilities/getDataFromUrl");

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

const getAllArticles = {
  kinyarwanda: async (req, res, next) => {
    const lang = req.query.lang;
    try {
      if (lang === "kin") {
        let links = await getLinksFromSitemap(kinSitemapFiles);
        let data = await getContentsFromLinks(links);
        console.log(data);
        res.json({ status: 200, links: data });
      }
    } catch (error) {
      res.json({ status: 500, message: error.message });
    }
  },

  english: async (req, res, next) => {
    const lang = req.query.lang;
    try {
      if (lang === "en") {
        let links = await getLinksFromSitemap(enSitemapFiles);
        let data = await getContentsFromLinks(links);
        console.log(data);
        res.json({ status: 200, links: data });
      }
    } catch (error) {
      res.json({ status: 500, message: error.message });
    }
  },
};

module.exports = getAllArticles;
