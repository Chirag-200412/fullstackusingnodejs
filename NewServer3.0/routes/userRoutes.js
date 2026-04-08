const express = require("express");
const router = express.Router();

const { getUsers, getUserById, createUser } = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);

// 🔥 Add this
router.post("/", createUser);

module.exports = router;