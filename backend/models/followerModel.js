const Mongoose = require("mongoose");

const followerSchema = new Mongoose.Schema(
  {
    follower: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    followee: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const followerModel = new Mongoose.model("Follower", followerSchema);
module.exports = followerModel;
