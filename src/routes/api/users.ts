import express from "express";
import UserController from "../../controllers/UserController";

const route = express.Router();

route.post("/create", UserController.createUser);
route.get("/all", UserController.getUsers);
route.get("/:email", UserController.getOneUser);
route.delete("/:email", UserController.deleteUser);

export default route;