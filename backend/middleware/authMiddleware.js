const jwt = require("jsonwebtoken");

const asyncHandler = require("./asyncHandler");
const { UserModel } = require("../model/UserModel");

const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || "";

  if (!authHeader.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("Authorization token is missing");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "change-me-in-production"
    );

    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) {
      res.status(401);
      throw new Error("User not found for this token");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Invalid or expired token");
  }
});

const authorizeRoles = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    res.status(403);
    next(new Error("You are not allowed to access this resource"));
    return;
  }

  next();
};

module.exports = { protect, authorizeRoles };