const debug = require('debug')('server:root');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vehicle-rental', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => debug('connected to the database'));

const port = process.env.PORT;
const app = require('./app');
app.listen(port, () => {
  debug(`Server running on port ${port}`);
});
