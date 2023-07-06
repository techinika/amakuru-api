const getLinksFromSitemap = require("../utilities/findLinksOnTheWeb");

let kinSitemapFiles = [
  "https://www.kigalitoday.com/sitemap.xml",
  "https://yegob.rw/post-sitemap31.xml",
  "https://techinika.com/post-sitemap.xml",
  "https://igihe.com/sitemap.xml",
];

let enSitemapFiles = [
  "https://yegob.rw/post-sitemap.xml",
  "https://www.newtimes.co.rw/sitemap.xml",
];

const getAllArticles = {
  kinyarwanda: (req, res, next) => {
    const lang = req.query.lang;
    try {
      if (lang === "kin") {
        getLinksFromSitemap(kinSitemapFiles);
      }
    } catch (error) {}
  },

  english: () => {},
};

module.exports = getAllArticles;
