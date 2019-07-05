'use strick'

const http = require('http');
const debug = require('debug')('nodestr:server');

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();

// Carrega as rotas
const indexRouter = require('./routes/index-router');
const productRouter = require('./routes/product-router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/products', productRouter);


module.exports = app;