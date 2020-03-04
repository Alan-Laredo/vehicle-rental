const Vehicle = require('./model');

module.exports.getVehicle = async (req, res, next) => {
  try {
    vehicle = await Vehicle.findById(req.params.vehicle_id);
    if (!vehicle) {
      return res
        .status(400)
        .json({ message: `There isn't a vehicle with the id: ${req.params.vehicle_id}` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.vehicle = vehicle;
  next();
};
