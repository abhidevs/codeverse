const express = require("express");
const userController = require("../controlers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/search", authMiddleware, userController.searchUser);

module.exports = router;
