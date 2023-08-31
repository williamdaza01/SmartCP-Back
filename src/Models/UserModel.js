// Models/UserModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  doc: String,
  name: String,
  lastname: String,
  address: String,
  age: Number,
  email: String,
  password: String,
  phone: String,
  huella: String,
});

module.exports = mongoose.model('Users', userSchema);
