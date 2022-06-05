const router = require("express").Router();
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");

router.route("/").post(auth, postController.createPost).get(auth, postController.getPosts);

router.get("/discover", auth, postController.getPostsDicover);

router.get("/getsavedposts", auth, postController.getSavedPosts);

router.get("/user/:id", auth, postController.getUserPosts);

router
  .route("/:id")
  .patch(auth, postController.updatePost)
  .get(auth, postController.getPost)
  .delete(auth, postController.deletePost);

router.patch("/:id/save", auth, postController.savePost);

router.patch("/:id/unsave", auth, postController.unSavePost);

router.patch("/:id/like", auth, postController.likePost);

router.patch("/:id/unlike", auth, postController.unLikePost);

module.exports = router;
