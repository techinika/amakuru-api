import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

enum Languages {
  Kiny = "kin",
  Eng = "eng"
}

const UserController = {
  createUser: function(req:any, res:any, next:any){
    res.status(201).send({message: "User is created"})
  }
};

export default UserController;
