const User = require('../models/userModel')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const register = async (req, res, next) => {
    try {
        const { username,fullname, email, password } = req.body
        if (!username || !fullname || !email || !password) {
            return res.status(401).json({ message: "please enter the all details" })
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(401).json({ message: "user already exist" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const setUser = await User.create({
            fullname,
            email,
            username,
            password: hashedPassword,
        })

        const token = jwt.sign({ id: setUser._id }, process.env.JWT_SECRET, {
            expiresIn: '30d'
        })

        if (setUser) {
            res.status(201).json({
                _id: setUser.id,
                fullname: setUser.fullname,
                username: setUser.username,
                email: setUser.email,
                profile: setUser.profile,
                bio: setUser.bio,
                links: setUser.link,
                dateOfBirth: setUser.name,
                address: setUser.address,
                isAdmin: setUser.isAdmin,
                token
            })
        } else {
            return res.status(401).json({ message: 'Invalid user data' })
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'something going wrong' })
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    try {

        const isUser = await User.findOne({ email })

        if (isUser) {
            const isPassword = await bcrypt.compare(password, isUser.password)
            if (isPassword) {
                const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECRET, {
                    expiresIn: '30d'
                })

                res.status(200).json({
                    _id: isUser.id,
                    fullname: isUser.fullname,
                    username: isUser.username,
                    email: isUser.email,
                    profile: isUser.profile,
                    bio: isUser.bio,
                    links: isUser.link,
                    dateOfBirth: isUser.name,
                    address: isUser.address,
                    isAdmin: isUser.isAdmin,
                    token
                })
            } else {
                return res.status(401).json({ message: 'invalid password' })
            }

        }
        else {

            return res.status(401).json({ message: 'user not found' })
        }


    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'something going wrong' })
    }

}


const searchUser = async (req, res, next) => {
    const keyWord = req.query.search
        ? {
            $or: [
                { fullname: { $regex: req.query.search, $options: "i" } },
                { username: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } }
            ]
        } : {}
    const getuser = await User.find(keyWord).find({ _id: { $ne: req.user } })
    res.status(200).json(getuser)
}

module.exports = {
    register,
    login,
    searchUser
}