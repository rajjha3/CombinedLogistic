const asyncHandler = require("../middleware/asyncHandler");
const { UserModel } = require("../model/UserModel");
const { generateToken } = require("../utils/token");
const { seedStarterPortfolio } = require("../utils/seedPortfolio");

const formatUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
});

const resolveRole = (email) => {
  const adminEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  return adminEmails.includes(email.toLowerCase()) ? "admin" : "user";
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Name, email, and password are required");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters long");
  }

  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await UserModel.findOne({ email: normalizedEmail });

  if (existingUser) {
    res.status(409);
    throw new Error("A user with this email already exists");
  }

  const user = await UserModel.create({
    name: name.trim(),
    email: normalizedEmail,
    password,
    role: resolveRole(normalizedEmail),
  });

  await seedStarterPortfolio(user._id);

  res.status(201).json({
    message: "User registered successfully",
    token: generateToken(user._id),
    user: formatUser(user),
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user = await UserModel.findOne({ email: normalizedEmail });

  if (!user || !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  await seedStarterPortfolio(user._id);

  res.json({
    message: "Login successful",
    token: generateToken(user._id),
    user: formatUser(user),
  });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ user: formatUser(req.user) });
});

const listUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find({})
    .select("name email role createdAt")
    .sort({ createdAt: -1 });

  res.json(users);
});

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  listUsers,
};