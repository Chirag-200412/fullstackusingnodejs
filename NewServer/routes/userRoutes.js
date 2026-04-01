const express = require("express");

const route = express.Router();
const userController = require("../controllers/userController");

// // We can write this
// route.get("/users", userController.getUsers);
// route.post("/users", userController.addUsers);

// // else this
route.route("/users").get(userController.getUsers).post(userController.addUsers);
route.post("/users/:userId/products/:productId", userController.addUsers);
route.get("/users/:id", userController.getUsersById);

module.exports = route;
