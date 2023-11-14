const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  name_station: String,
  coords: {
    ltn: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  squares: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Square', required: true, }]
});

module.exports = mongoose.model('Station', stationSchema);
