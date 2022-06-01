const Mongoose = require("mongoose");

const followerSchema = new Mongoose.Schema(
  {
    followerId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    followeeId: {
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