const postService = require("../services/postService");
const mediaService = require("../services/mediaService");

exports.createPost = async (req, res) => {
  try {
    const { text, media } = req.body;
    if (!text && !media) {
      return res.status(401).json({
        success: false,
        message: "Either provide text or media to create a post",
      });
    }

    let createdMedia;
    if (media && media.length) {
      const tempMedia = media.map(
        async (m) => await mediaService.createMedia(req.user, m)
      );
      createdMedia = await Promise.all(tempMedia);
      req.body.media = createdMedia;
    }

    const newPost = await postService.createPost(req);
    res.status(201).json({
      newPost: { ...newPost._doc, user: req.user, media: createdMedia || [] },
      success: true,
      message: "Post created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

exports.getPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await postService.findPostById(postId);
    if (!post)
      return res
        .status(404)
        .json({ success: false, message: "post not found" });

    res.status(200).json({ post: post, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

exports.getUserFeed = async (req, res) => {
  try {
    const posts = await postService.findRecentPostsForUser(req);
    res.status(200).json({ posts: posts, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

exports.getTrendingPosts = async (req, res) => {
  try {
    const posts = await postService.getTrendingPosts(req);
    res.status(200).json({ posts: posts, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

exports.getPostsOfUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const posts = await postService.findPostsOfUser(userId);
    res.status(200).json({ posts: posts, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};
