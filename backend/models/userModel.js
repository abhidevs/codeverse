const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    signinMethod: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default:
        "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
    },
    coverImage: {
      type: String,
    },
    bio: {
      type: String,
    },
    link: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = new Mongoose.model("User", userSchema);
module.exports = userModel;
