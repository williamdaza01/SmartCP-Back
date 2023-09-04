const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  name_station: String,
  coords: String,
  squares: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Square' }]
});

module.exports = mongoose.model('Station', stationSchema);
