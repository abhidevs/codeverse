const Mongoose = require("mongoose");

const likeSchema = new Mongoose.Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    parentId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    parentType: {
      type: String,
      required: true,
    },
    ActivityId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Activity",
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

const likeModel = new Mongoose.model("Like", likeSchema);
module.exports = likeModel;
