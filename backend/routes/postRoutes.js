const router = require("express").Router();
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");
const getUser = require("../middleware/getUser");

router.post("/", auth, postController.createPost);

router.get("/", getUser, postController.getPosts);
router.get("/trends", getUser, postController.trendPosts);

router.get("/discover", auth, postController.getPostsDicover);

router.get("/getsavedposts", auth, postController.getSavedPosts);

router.get("/user/:id", postController.getUserPosts);

router.get("/:id", postController.getPost);

router
  .route("/:id")
  .patch(auth, postController.updatePost)
  .delete(auth, postController.deletePost);

router.patch("/:id/save", auth, postController.savePost);

router.patch("/:id/unsave", auth, postController.unSavePost);

router.patch("/:id/like", auth, postController.likePost);

router.patch("/:id/unlike", auth, postController.unLikePost);

module.exports = router;
