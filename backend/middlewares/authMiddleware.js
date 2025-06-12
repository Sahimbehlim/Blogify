const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendErrorResponse = require("../utils/errorResponse");

// Middleware to protect routes
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1]; // Extract token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        return sendErrorResponse(res, 404, "User not found");
      }

      req.user = user;
      next();
    } else {
      res
        .status(401)
        .json({ success: false, message: "Unauthorized, no token!!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Token failed", error: error.message });
  }
};

module.exports = { protect };
