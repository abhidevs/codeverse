
const commentService = require('../services/commentService');

exports.createComment = async (req, res) => {
    try {
        const { text, parentId, parentType, ActivityId } = req.body;
        if (!text || !parentId || !parentType || !ActivityId || !userId) {
            return res.status(401).json({ message: "please enter the all details" });
        }
        const Commnet = await commentService.createComment({
            text,
            userId,
            parentId,
            parentType,
            ActivityId
        })
        res.status(201).json(Commnet)
    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}

exports.getComment = async (req, res) => {
    try {
        const { parentId } = req.body;
        if (!parentId) {
            return res.status(401).json({ message: "user not authenticate" });
        }
        const Commnet = await commentService.getComment({ parentId })
        res.status(201).json(Commnet)
    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}

exports.deleteComment = async (req, res) => {
    try {
        const { parentId } = req.body;
        if (!parentId) {
            return res.status(401).json({ message: "user not authenticate" });
        }
        await commentService.deleteComment({ parentId })
        res.status(201).json({ message: "comment deleted seccessfully" })
    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}


