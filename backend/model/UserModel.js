const mongoose = require("mongoose");

const { UserSchema } = require("../schemas/UserSchema");

const UserModel = mongoose.models.user || mongoose.model("user", UserSchema);

module.exports = { UserModel };