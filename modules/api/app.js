const express = require('express');
const routes  = require('./routes');
const app     = express();

app.set('config', require('./config/app'));
app.use('/', routes);

module.exports = app;