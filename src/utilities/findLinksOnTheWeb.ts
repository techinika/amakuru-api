import axios from "axios";
import { parseStringPromise } from "xml2js";

// sitemap files

const getLinksFromSitemap = async (sitemaps: any) => {
  let data:any = [];
  for (let sitemap of sitemaps) {
    try {
      const response = await axios.get(sitemap);
      const sitemapContent = response.data;
      const sitemapObject = await parseXMLSitemap(sitemapContent);
      const urls = sitemapObject.urlset.url;
      const links = urls.map((url:any) => url.loc[0]);
      data = data.concat(links);
    } catch (error) {
      console.error(`Error fetching sitemap: ${sitemap}`, error);
    }
  }
  console.log(data)
  return data;
};

async function parseXMLSitemap(sitemapContent:any) {
  try {
    const sitemapObject = await parseStringPromise(sitemapContent);
    return sitemapObject;
  } catch (error) {
    console.error("Error parsing sitemap XML", error);
    throw error;
  }
}

export default getLinksFromSitemap;
