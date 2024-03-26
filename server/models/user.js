/**
 *  pulled from this guide
 *  https://namanrivaan.medium.com/authentication-with-mern-stack-9a4dbcd2290c
 */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    minLength: 6,
  },
  username: {
    required: true,
    type: String,
    trim: true,
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;