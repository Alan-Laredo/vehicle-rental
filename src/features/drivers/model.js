const mongoose = require('mongoose');

const { vehicleSchema } = require('../vehicles/model');

const driverSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  driver_license: { type: String, required: true },
  vehicles: [{ type: vehicleSchema }],
});

module.exports = mongoose.model('Driver', driverSchema);
module.exports.driverSchema = driverSchema;
