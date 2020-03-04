const Driver = require('./model');

module.exports.getDriver = async (req, res, next) => {
  try {
    driver = await Driver.findById(req.params.driver_id);
    if (driver === null) {
      return res
        .status(400)
        .json({ message: `There isn't a driver with the id: ${req.params.driver_id}` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.driver = driver;
  next();
};
