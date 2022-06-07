const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const getUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const tokenArr = token.split(" ");
    const tokenValue = tokenArr && tokenArr.length > 1 && tokenArr[1];

    if (tokenValue) {
      const decoded = jwt.verify(tokenValue, process.env.ACCESS_TOKEN_SECRET);
      if (decoded) req.user = await Users.findOne({ _id: decoded.id });
    }
    next();
  } catch (err) {
    // console.log(err);
    next();
  }
};

module.exports = getUser;
