const express = require('express');

const morgan = require('morgan');

const app = express();

const driverRouter = require('./features/drivers/router');
const vehicleRouter = require('./features/vehicles/router');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/drivers', driverRouter);
app.use('/vehicles', vehicleRouter);

module.exports = app;
