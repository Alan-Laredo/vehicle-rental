const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  model: { type: Number, required: true },
  year: { type: String, required: true },
  vehicles_available: { type: Number, required: true },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
module.exports.vehicleSchema = vehicleSchema;
