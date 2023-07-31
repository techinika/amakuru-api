const axios = require("axios");
const { parseStringPromise } = require("xml2js");

// sitemap files

const getLinksFromSitemap = async (sitemaps) => {
  let data = [];
  for (let sitemap of sitemaps) {
    try {
      const response = await axios.get(sitemap);
      const sitemapContent = response.data;
      const sitemapObject = await parseXMLSitemap(sitemapContent);
      const urls = sitemapObject.urlset.url;
      const links = urls.map((url) => url.loc[0]);
      data = data.concat(links);
    } catch (error) {
      console.error(`Error fetching sitemap: ${sitemap}`, error);
    }
  }
  console.log(data)
  return data;
};

async function parseXMLSitemap(sitemapContent) {
  try {
    const sitemapObject = await parseStringPromise(sitemapContent);
    return sitemapObject;
  } catch (error) {
    console.error("Error parsing sitemap XML", error);
    throw error;
  }
}

module.exports = getLinksFromSitemap;
