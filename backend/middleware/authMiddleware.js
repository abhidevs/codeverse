const User = require("../models/userModel");
const jwt = require("../utils/jwt");

const authMiddleware = async (req, res, next) => {
  let token;
  if (!req.headers.authorization?.startsWith("Bearer")) {
    return res.status(403).json({ message: "not allowed" });
  }

  try {
    const header = req.headers.authorization;
    token = header.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "invalid token" });
    }

    const decoded = jwt.verifyToken(token);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "something went wrong" });
  }
};

module.exports = authMiddleware;
