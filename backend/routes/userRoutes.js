const router = require("express").Router();
const auth = require("../middleware/auth");
const userController = require("../controllers/userController");

router.get("/search", auth, userController.searchUser);

router.get("/suggestions", auth, userController.suggestionsUser);

router.get("/:id", auth, userController.getUser);

router.patch("/updateuser/:id", auth, userController.updateUser);

router.patch("/:id/follow", auth, userController.follow);

router.patch("/:id/unfollow", auth, userController.unfollow);

module.exports = router;
