const express = require("express");

const route = express.Router();
const userController = require("../controllers/userController");

route.get("/get/users", userController.getUsers);
route.get("/get/users/:id", userController.getUsersById);
route.post("/add/users", userController.addUsers);

module.exports = route;
