const likeService = require("../services/likeService");


exports.createLikes = async (req, res) => {
    try {
        const { userId, parentId, parentType, ActivityId } = req.body;

        const Likes = await likeService.createLike({
            userId,
            parentId,
            parentType,
            ActivityId
        })
        res.status(201).json(Likes)
    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}

exports.disLikes = async (req, res) => {
    try {
        const { parentId } = req.body;

        const Likes = await likeService.disLike({
            parentId
        })
        res.status(201).json(Likes)
    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}

exports.getLikes = async (req, res) => {
    try {
        const { parentId } = req.body;
        const Likes = await likeService.getLike({
            parentId
        })
        res.status(201).json(Likes)
    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}

