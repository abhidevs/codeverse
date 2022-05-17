const userService = require("../services/userService");
const encryptPassword = require("../utils/encryptPassword");
const jwt = require("../utils/jwt");

exports.registerUser = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;
    if (!username || !fullname || !email || !password) {
      return res.status(401).json({ message: "please enter the all details" });
    }

    const userExists = await userService.findUserByEmail(email);
    if (userExists) {
      return res.status(401).json({ message: "user already exist" });
    }

    const hashedPassword = await encryptPassword.hashPassword(password);
    const user = await userService.createUser({
      fullname,
      email,
      username,
      password: hashedPassword,
      signinMethod: "credantial",
    });

    const token = jwt.generateToken({ id: user._id });
    const { password: pass, ...userInfo } = user._doc;
    res.status(201).json({ ...userInfo, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.findUserByEmail(email);
    if (!user) return res.status(401).json({ message: "user not found" });

    const passwordVerified = await encryptPassword.verifyPassword(
      password,
      user.password
    );
    if (!passwordVerified)
      return res.status(401).json({ message: "invalid password" });

    const token = jwt.generateToken({ id: user._id });
    const { password: pass, ...userInfo } = user._doc;
    res.status(200).json({ ...userInfo, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
