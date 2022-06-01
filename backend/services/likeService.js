const Like = require('../models/likeModel');

exports.createLike = async (userBody) => {
    try {
        const { userId, parentId, parentType, ActivityId } = userBody;
        return await Like.create({
         userId, parentId, parentType, ActivityId
        });
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.disLike = async (userBody) => {
    try {
        console.log(userBody);
        return await Like.findByIdAndDelete(userBody);
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.getLike = async (userBody) => {
    try {
        return await Like.find(userBody);
    } catch (error) {
        throw Error("Something went wrong");
    }
};

