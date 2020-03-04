const express = require('express');

const router = express.Router();

const { checkProperties } = require('../../middlewares');
const { getVehicle } = require('./middlewares');

const Vehicle = require('./model');

// Get all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json({ data: vehicles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.get('/:vehicle_id', getVehicle, async (req, res) => {
  res.json({ data: res.vehicle });
});

// Insert vehicle to DB
router.post('/', async (req, res) => {
  const vehicle = new Vehicle({
    model: req.body.model,
    year: req.body.year,
    vehicles_available: req.body.vehicles_available,
  });

  try {
    const newVehicle = await vehicle.save();
    res.status(201).json({ data: newVehicle });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

router.put('/:vehicle_id', getVehicle, async (req, res) => {
  try {
    const vehicle = await Vehicle.findOneAndUpdate(
      { _id: req.params.vehicle_id },
      req.body,
      {
        new: true,
      }
    );
    res.status(402).json({ data: vehicle });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:vehicle_id', getVehicle, async (req, res) => {
  try {
    await res.vehicle.remove();
    res.json({ message: 'deleted vehicle' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
