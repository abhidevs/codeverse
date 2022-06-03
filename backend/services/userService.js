const User = require("../models/userModel");

exports.createUser = async (userBody) => {
  try {
    const { fullname, email, username, password, signinMethod } = userBody;
    return await User.create({
      fullname,
      email,
      username,
      password,
      signinMethod,
    });
  } catch (error) {
    throw Error("Something went wrong");
  }
};

exports.findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw Error("Something went wrong");
  }
};

exports.searchUser = async (searchQuery) => {
  try {
    const keyWord = {
      $or: [
        { fullname: { $regex: searchQuery, $options: "i" } },
        { username: { $regex: searchQuery, $options: "i" } },
        { email: { $regex: searchQuery, $options: "i" } },
      ],
      isDeleted: false,
    };

    return await User.find(keyWord);
  } catch (error) {
    throw Error("Something went wrong");
  }
};
