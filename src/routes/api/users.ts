import express from "express";
import UserController from "../../controllers/UserController";

const route = express.Router();

route.post("/create", UserController.createUser);

export default route;