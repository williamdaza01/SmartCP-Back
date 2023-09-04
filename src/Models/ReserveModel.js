const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  id_square: { type: mongoose.Schema.Types.ObjectId, ref: 'Square', required: true },
  reservation_date: Date,
  reservation_time: String,
  date: {type: Date, default: Date.now},
  state: Boolean
});

module.exports = mongoose.model('Reserve', reserveSchema);
