const mongoose = require('mongoose');

const squareSchema = new mongoose.Schema({
  state: Boolean
});

module.exports = mongoose.model('Square', squareSchema);
