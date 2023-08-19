import express from "express";
import AmakuruRoute from "./api/amakuru";
import UsersRoute from "./api/users";

const routes = express.Router();

routes.use("/amakuru", AmakuruRoute);
routes.use("/users", UsersRoute);

export default routes;
