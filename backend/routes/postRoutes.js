const express = require("express");
const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/feed", authMiddleware, postController.getUserFeed);

router.get("/trending", authMiddleware, postController.getTrendingPosts);

router.get("/user/:userId", authMiddleware, postController.getPostsOfUser);

router.post("/", authMiddleware, postController.createPost);

router.get("/:postId", authMiddleware, postController.getPost);


module.exports = router;
