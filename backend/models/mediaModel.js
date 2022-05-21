const Mongoose = require("mongoose");

const mediaSchema = new Mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    userId: {
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

const mediaModel = new Mongoose.model("Media", mediaSchema);
module.exports = mediaModel;
