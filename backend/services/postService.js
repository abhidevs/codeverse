const Post = require('../models/postModel')

exports.createPost = async (textBody) => {
    try {
        const { text, userId } = textBody;
        return await Post.create({
            text, userId
        });
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.fetchUserPost = async (userId) => {
    try {
        return await Post.find({ userId });
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.fetchAllPost = async () => {
    try {
        return await Post.find();
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.fetchDetailPost = async (postId) => {
    try {
        return await Post.findById({ postId });
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.editPost = async (textBody) => {
    try {
        const { text, postId } = textBody;
        return await Post.findByIdAndUpdate(postId, { text }, {
            new: true,
        });
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.deletePost = async (postId, userId) => {
    try {
        return await Post.findByIdAndRemove({ postId, userId });
    } catch (error) {
        throw Error("Something went wrong");
    }
};