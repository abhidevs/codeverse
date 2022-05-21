const Mongoose = require("mongoose");

const postSchema = new Mongoose.Schema(
  {
    text: {
      type: String,
    },
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    media: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Media",
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const postModel = new Mongoose.model("Post", postSchema);
module.exports = postModel;
