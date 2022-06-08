const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
    },
    coverimage: {
        type: String,
        default: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
    },
    bio: { type: String, default: '' },
    gender: { type: String, default: '' },
    address: { type: String, default: '' },
    dob: { type: String, default: '' },
    website: { type: String, default: '' },
    followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    saved: [{ type: mongoose.Types.ObjectId, ref: 'user' }]
}, {
    timestamps: true
})


module.exports = mongoose.model('user', userSchema)