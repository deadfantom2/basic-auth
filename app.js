const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const basicAuth = require('./helper/auth');
const errorHandler = require('./helper/error-handler');

// Init express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(basicAuth);

// Api routes
app.use('/api', require('./routes/users.controller'));

// Error Handler
app.use(errorHandler);

module.exports = app;
