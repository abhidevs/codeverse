const express = require("express");
const { findFollower, createFollower } = require("../controllers/followController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/createfollower", authMiddleware, createFollower);
router.get("/", authMiddleware, findFollower);
router.delete("/unfollow", authMiddleware, unFollow);

module.exports = router;