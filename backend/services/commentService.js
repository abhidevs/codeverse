const Comment = require('../models/commentModel');

exports.createComment = async (userBody) => {
    try {
        const { text, userId, parentId, parentType, ActivityId  } = userBody;
        return await Comment.create({
            text, userId, parentId, parentType, ActivityId
        });
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.getComment = async (userBody) => {
    try {
        console.log(userBody);
        return await Comment.find(userBody);
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.deleteComment = async (commentId) => {
    try {
        return await Comment.findByIdAndDelete(commentId);
    } catch (error) {
        throw Error("Something went wrong");
    }
};