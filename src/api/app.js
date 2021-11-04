const express = require('express');

const { errMiddleware } = require('../middlewares');

const bodyParser = require('body-parser');

const routes = require('../routes');

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.use(errMiddleware);

module.exports = app;
