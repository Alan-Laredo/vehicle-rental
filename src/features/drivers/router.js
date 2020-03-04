const express = require('express');

const router = express.Router();

const { checkProperties } = require('../../middlewares');
const { getDriver } = require('./middlewares');
const { getVehicle } = require('../vehicles/middlewares');

const Driver = require('./model');
const Vehicle = require('../vehicles/model');

// Get all drivers
router.get('/', async (req, res) => {
  const params = ['filter', 'value'].sort();
  const queryParams = Object.keys(req.query).sort();
  console.log(queryParams);
  if (queryParams.length === 1 && queryParams.every((param, i) => param === params[i])) {
    const missingQueryParam = params.find((param, i) => param !== queryParams[i]);
    return res.status(400).json({
      message: `The ${missingQueryParam} is has not being provided`,
    });
  }

  const { filter, value } = req.query;
  try {
    const drivers = await Driver.find({ [filter]: value });
    res.json({ data: drivers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.get('/:driver_id', getDriver, async (req, res) => {
  res.json({ data: res.driver });
});

// Insert driver to DB
router.post('/', async (req, res) => {
  const driver = new Driver({
    age: req.body.age,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    driver_license: req.body.driver_license,
  });

  try {
    const newDriver = await driver.save();
    res.status(201).json({ data: newDriver });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

router.put('/:driver_id', getDriver, async (req, res) => {
  try {
    const driver = await Driver.findOneAndUpdate(
      { _id: req.params.driver_id },
      req.body,
      {
        new: true,
      }
    );
    res.status(402).json({ data: driver });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:driver_id', getDriver, async (req, res) => {
  try {
    await res.driver.remove();
    res.json({ message: 'deleted driver' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:driver_id/vehicles', getDriver, async (req, res) => {
  try {
    if (!res.driver.vehicles.length) {
      res.status(404).json({
        message: `There isn't a vehicles rented by ${res.driver.first_name} ${res.driver.last_name}`,
      });
    }
    res.json({ data: res.driver.vehicles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.get(
  '/:driver_id/vehicles/:vehicle_id',
  getDriver,
  getVehicle,
  async (req, res) => {
    try {
      res.vehicle.vehicles_available--;
      await res.vehicle.save();
      res.driver.vehicles = [...res.driver.vehicles, res.vehicle];
      await res.driver.save();
      res.status(201).json({ data: res.driver });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
