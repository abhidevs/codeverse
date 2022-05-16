const Mongoose = require("mongoose")

const userSchema = new Mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        default: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    },
    bio: {
        type: String,
        default: ""
    },
    links: {
        type: String,
        default: ""
    },
    dateOfBirth: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
})

const userData = new Mongoose.model("User", userSchema)
module.exports = userData;