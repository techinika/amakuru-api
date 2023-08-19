import express from "express";
import ArticleController from "../../controllers/ArticleController";

const route = express.Router();

route.get("/kin", ArticleController.getKinyarwandaArticles);

export default route;
