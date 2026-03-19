const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

require('./models/Users');
require('./services/passport');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT);
