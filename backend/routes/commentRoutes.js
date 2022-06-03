const express = require("express");
const { createComment, deleteComment, getComment } = require("../controllers/commentController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/postcomment", authMiddleware, createComment);
router.delete("/deleteComment", authMiddleware, deleteComment);
router.get("/", authMiddleware, getComment);

module.exports = router;
