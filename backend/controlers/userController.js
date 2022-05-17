const userService = require("../services/userService");

exports.searchUser = async (req, res) => {
  try {
    const keyWord = req.query.search;
    if (!keyWord)
      return res.status(401).json({ message: "Search query cannot be empty" });

    const getuser = await userService.searchUser(keyWord);
    res.status(200).json(getuser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
