const Media = require("../models/mediaModel");

exports.createMedia = async (user, media) => {
  const { url } = media;

  try {
    const createdMedia = await Media.create({ url, user: user._id });
    await createdMedia.save();
    return createdMedia;
  } catch (error) {
    throw Error("Something went wrong");
  }
};
