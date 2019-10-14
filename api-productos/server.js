require('dotenv').config({ path: 'env.env' });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.API_PORT || 8080;
const products = require('./routers/v1/products');

//CORS Middleware
app.use(function(req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/v1/products', products);

app.listen(port, () => console.log('API WMT now running on port', port));
