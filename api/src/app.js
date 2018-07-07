const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const pessoaRoute = require('./routes/pessoaRoute');

app.use('/', index);
app.use('/pessoa', pessoaRoute);

module.exports = app;