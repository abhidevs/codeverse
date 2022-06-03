const Post = require("../models/postModel");

const POST_LIMIT = 10;

exports.createPost = async ({ user, body }) => {
  const { text, media } = body;

  try {
    let mediaArr;

    if (media && media.length) {
      mediaArr = media.map((m) => m._id);
    } else {
      mediaArr = [];
    }

    const post = await Post.create({
      text,
      media: mediaArr,
      user: user._id,
    });
    await post.save();
    return post;
  } catch (error) {
    throw Error("Something went wrong");
  }
};

exports.findPostById = async (postId) => {
  try {
    return await Post.findById(postId).populate("user media");
  } catch (error) {
    throw Error("Something went wrong");
  }
};

exports.findRecentPostsForUser = async ({ user }) => {
  try {
    return await Post.find()
      .sort("-createdAt")
      .limit(POST_LIMIT)
      .populate("user media");
  } catch (error) {
    throw Error("Something went wrong");
  }
};

exports.getTrendingPosts = async ({ user }) => {
  try {
    return await Post.find()
      .sort("-createdAt")
      .limit(POST_LIMIT)
      .populate("user media");
  } catch (error) {
    throw Error("Something went wrong");
  }
};

exports.findPostsOfUser = async (userId) => {
  try {
    return await Post.find({ user: userId })
      .sort("-createdAt")
      .limit(POST_LIMIT)
      .populate("user media");
  } catch (error) {
    throw Error("Something went wrong");
  }
};
