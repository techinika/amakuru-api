import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
import getLinksFromSitemap from "../utilities/findLinksOnTheWeb";
import getContentsFromLinks from "../utilities/getDataFromUrl";
import uploadToCloudinary from "../helpers/uploadImage";

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
  createArticle: async function(req: any, res: any, next: any){
    try{
      let existingArticle = await prisma.article.findUnique({
        where: {
          slug: req.body.slug
        }
      })
      if(!existingArticle){
        let imageLink = await uploadToCloudinary(req.body.image, req.body.slug);
        if(imageLink){
          let article = await prisma.article.create({
            data: {
              title: req.body.title,
              imageLink: imageLink,
              content: req.body.content,
              slug: req.body.slug || null,
              postLink: null,
              publishedAt: req.body.publishedAt || new Date(),
              publishStatus: true,
              authorId: req.body.author,
              updatedAt: new Date(),
              language: req.body.language || null
            }
          });
          if(article) {
            res.status(201).send({ status: 201, message: "Article published!", article})
          }else{
            res.status(400).send({status: 400, message: "Failed to create a new article"})
          }
        }else {
          res.status(500).send({ error: "Failed to upload an image" });
        }
      } else {
        res.status(400).send({ status: 400, message: "Article already exists!"})
      }
    }catch(err: any){
      console.log(err);
      next();
    }
  },
  unpublishArticle: async function(req: any, res:any, next:any) {
    const uniqueId = req.params.id;
    try {
      const article = await prisma.article.update({
        where: {
          id: uniqueId,
        },
        data: {
          publishStatus: false,
          unpublishedAt: new Date(),
        }
    });
      if(article) {
        res.status(200).send({status: 200, message: `Article with ID ${uniqueId} is unpublished!`, article})
      }else {
        res.status(404).send({status: 404, message: `Article with ID ${uniqueId} is not found!`})
      }
    } catch (error:any) {
      console.log(error.message);
      next()
    }
  },
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
