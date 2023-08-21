import express from "express";
import ArticleController from "../../controllers/ArticleController";

const route = express.Router();

route.post("/create", ArticleController.createArticle);
route.patch("/unpublish/:id", ArticleController.createArticle);
route.get("/kin", ArticleController.getKinyarwandaArticles);

export default route;
