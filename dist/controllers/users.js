"use strict";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const usersControllers = {
    getUsers: (req, res) => {
        try {
            let data = [];
            res.status(200).json({ message: "Success", data });
        }
        catch (err) {
            res.status(500).json({ message: "Error", error: err });
        }
    },
    createUsers: (req, res) => {
        try {
            let data = [];
            res.status(200).json({ message: "Success", data });
        }
        catch (err) {
            res.status(500).json({ message: "Error", error: err });
        }
    },
    updateUsers: (req, res) => {
        try {
            let data = [];
            res.status(200).json({ message: "Success", data });
        }
        catch (err) {
            res.status(500).json({ message: "Error", error: err });
        }
    },
    deleteUsers: (req, res) => {
        try {
            let data = [];
            res.status(200).json({ message: "Success", data });
        }
        catch (err) {
            res.status(500).json({ message: "Error", error: err });
        }
    },
    bulkAddUsers: async (req, res) => {
        try {
            let data = [];
            const response = await prisma.user.createMany({ data, skipDuplicates: true });
            res.status(201).json({ message: "Success", response });
        }
        catch (err) {
            res.status(500).json({ message: "Error", error: err });
        }
    },
    getOneUser: (req, res) => {
        try {
            let data = {};
            res.status(200).json({ message: "Success", data });
        }
        catch (err) {
            res.status(500).json({ message: "Error", error: err });
        }
    }
};
module.exports = usersControllers;
//# sourceMappingURL=users.js.map