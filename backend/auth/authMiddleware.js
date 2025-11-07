const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    const decoded = await jwt.decode(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.adminId);

    next();
  } else {
    res.status(401).json({ login: true, message: "Not authorized, no token" });
  }
};

module.exports = authMiddleware;
