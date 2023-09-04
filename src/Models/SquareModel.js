const mongoose = require('mongoose');

const squareSchema = new mongoose.Schema({
  id_station: { type: mongoose.Schema.Types.ObjectId, ref: 'Station', required: true },
  state: Boolean
});

module.exports = mongoose.model('Square', squareSchema);
