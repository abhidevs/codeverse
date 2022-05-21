const Mongoose = require("mongoose");

const commentSchema = new Mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
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

const commentModel = new Mongoose.model("Comment", commentSchema);
module.exports = commentModel;
