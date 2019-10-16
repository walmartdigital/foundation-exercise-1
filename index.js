require('dotenv').config({ path: 'env.env' });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const products = require('./src/routers/v1/products');

app.use(express.static(__dirname + '/public'));

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
