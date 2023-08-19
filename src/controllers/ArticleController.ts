import getLinksFromSitemap from "../utilities/findLinksOnTheWeb";
import getContentsFromLinks from "../utilities/getDataFromUrl";

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
  getKinyarwandaArticles: async (req:any, res:any, next:any) => {
    try {
      let links = await getLinksFromSitemap(kinSitemapFiles);
      let data = await getContentsFromLinks(links);
      console.log(data);
      res.status(200).json({ status: 200, data: data });
    } catch (error: any) {
      res.json({ status: 500, message: error.message });
    }
  },
};

export default ArticleController;
