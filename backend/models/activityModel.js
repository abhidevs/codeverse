const Mongoose = require("mongoose");

const activitySchema = new Mongoose.Schema(
  {
    parent: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
    },
    parentType: {
      type: String,
      required: true,
    },
    likesCount: {
      type: Number,
      default: 0,
    },
    commentsCount: {
      type: Number,
      default: 0,
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

const activityModel = new Mongoose.model("Activity", activitySchema);
module.exports = activityModel;
