const express = require("express");
const { createLikes, getLikes, disLikes } = require("../controllers/likeControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/createlike", authMiddleware, createLikes);
router.delete("/dislikes", authMiddleware, disLikes);
router.get("/", authMiddleware, getLikes);

module.exports = router;