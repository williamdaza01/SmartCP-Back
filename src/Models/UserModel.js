// Models/UserModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  type: String,
  doc: String,
  name: String,
  lastname: String,
  age: Date,
  email: String,
  password: String,
  phone: String,
  isAdmin: Boolean,
  huella: { type: String, require: false },
});

module.exports = mongoose.model("Users", userSchema);
