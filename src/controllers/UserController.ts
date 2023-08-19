import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

enum Languages {
  Kiny = "kin",
  Eng = "eng"
}

const UserController = {
  createUser: async function(req:any, res:any, next:any){
    try {
      const user = await prisma.user.create({data:{name:req.body.name, email:req.body.email}});
      if(user) {
        res.status(201).send({status: 201, message: "User is created", user})
      }
    } catch (error:any) {
      console.log(error.message);
      next()
    }
    res.status(201).send({message: "User is created"})
  },
  getUsers: async function(req:any, res:any, next:any){
    try {
      const users = await prisma.user.findMany();
      if(users) {
        res.status(200).send({status: 200, message: "List of all users!", users})
      }
    } catch (error:any) {
      console.log(error.message);
      next()
    }
    res.status(201).send({message: "User is created"})
  },
  getOneUser: async function(req:any, res:any, next:any){
    const uniqueEmail = req.params.email;
    try {
      const user = await prisma.user.findUnique({where: {
        email: uniqueEmail,
      }});
      if(user) {
        res.status(200).send({status: 200, message: `Details of user with email ${uniqueEmail}`, user})
      }else {
        res.status(404).send({status: 404, message: `User with email ${uniqueEmail} is not found!`})
      }
    } catch (error:any) {
      console.log(error.message);
      next()
    }
    
  },
  deleteUser: async function(req:any, res:any, next:any){
    const uniqueEmail = req.params.email;
    try {
      const user = await prisma.user.delete({where: {
        email: uniqueEmail,
      }});
      if(user) {
        res.status(200).send({status: 200, message: `User with email ${uniqueEmail} is deleted!`})
      }else {
        res.status(404).send({status: 404, message: `User with email ${uniqueEmail} is not found!`})
      }
    } catch (error:any) {
      console.log(error.message);
      next()
    }
    
  },
  updateUser: async function(req:any, res:any, next:any){
    const uniqueEmail = req.params.email;
    try {
      const user = await prisma.user.update({
        where: {
          email: uniqueEmail,
        },
        data: {
          name: req.body.name,
          email: req.body.email
        }
    });
      if(user) {
        res.status(200).send({status: 200, message: `User with email ${uniqueEmail} is updated!`, user})
      }else {
        res.status(404).send({status: 404, message: `User with email ${uniqueEmail} is not found!`})
      }
    } catch (error:any) {
      console.log(error.message);
      next()
    }
    
  },
};

export default UserController;