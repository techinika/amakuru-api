import axios from "axios";
import cheerio from "cheerio";

async function getContentsFromLinks(links:any) {
  const articleContents = [];
  for (let link of links) {
    try {
      const response = await axios.get(link);
      const htmlContent = response.data;
      const articleData:any = parseArticleData(htmlContent);
      articleData["link"] = link;
      articleContents.push(articleData);
    } catch (error) {
      console.error(`Error fetching content from link: ${link}`, error);
    }
  }
  console.log(articleContents);
  return articleContents;
}

function parseArticleData(htmlContent:any) {
  const $ = cheerio.load(htmlContent);

  const title = $(".entry-title .title-article").text().trim();
  const author = $(".entry-author .url .fn .spip_in").text().trim();
  const date = $(".updated .date_x").text().trim();
  const content = $(".entry-content .fulltext").text().trim();

  let image:any = $(".wp-post-image .img-responsive").first();
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

export default getContentsFromLinks;
