const followService = require('../services/followService')

exports.createFollower = async (req, res) => {
    try {

        const { followerId, followId } = req.body

        const follow = await followService.createFollow({ followerId, followId })
        res.json(follow)

    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}

exports.findFollower = async (req, res) => {
    try {
        const { followId } = req.body
        const follow = await followService.findFollow({ followId })
        res.json(follow)

    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}

exports.unFollow = async (req, res) => {
    try {
        const { followerId, followId } = req.body
        const follow = await followService.findFollow({ followerId, followId })
        res.json(follow)

    } catch (error) {
        console.log(error);
        throw Error("Something went wrong");
    }
}



