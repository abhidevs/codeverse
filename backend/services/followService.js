const Follow = require('../models/followerModel');

exports.createFollow = async (userBody) => {
    try {
        const { followerId, followId } = userBody
        return await Follow.create({ followerId, followId })

    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.findFollow = async (userBody) => {
    try {
        console.log(userBody);
        return await Follow.find(userBody)
    } catch (error) {
        throw Error("Something went wrong");
    }
};

exports.unFollow = async (userBody) => {
    try {
        console.log(userBody);
        return await Follow.findByIdAndDelete(userBody)
    } catch (error) {
        throw Error("Something went wrong");
    }
};
