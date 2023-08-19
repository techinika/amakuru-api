const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const usersControllers = {
  getUsers: (req: Request, res: Response) => {
    try {
      let data = [];

      res.status(200).json({message: "Success", data})
    } catch (err) {
      res.status(500).json({message: "Error", error: err})
    }
  },
  createUsers: (req: Request, res: Response) => {
    try {
      let data = [];
      res.status(200).json({message: "Success", data})
    } catch (err) {
      res.status(500).json({message: "Error", error: err})
    }
  },
  updateUsers: (req: Request, res: Response) => {
    try {
      let data = [];
      res.status(200).json({message: "Success", data})
    } catch (err) {
      res.status(500).json({message: "Error", error: err})
    }
  },
  deleteUsers: (req: Request, res: Response) => {
    try {
      let data = [];
      res.status(200).json({message: "Success", data})
    } catch (err) {
      res.status(500).json({message: "Error", error: err})
    }
  },
  bulkAddUsers: async (req: Request, res: Response) => {
    try {
      let data = [];
      const response = await prisma.user.createMany({data, skipDuplicates: true});
      res.status(201).json({message: "Success", response})
    } catch (err) {
      res.status(500).json({message: "Error", error: err})
    }
  },
  getOneUser: (req: Request, res: Response) => {
    try {
      let data = {};
      res.status(200).json({message: "Success", data})
    } catch (err) {
      res.status(500).json({message: "Error", error: err})
    }
  }
};

module.exports = usersControllers;
