require('dotenv').config({ path: 'env.env' });

const data = require('../data/products');
const httpStatusCodes = require('http-status');

const _get = async (req, res, next) => {
  
  
  const error = '';

  try {

    let params = req.params;
    
    const result = await data.get(params);

    if (result.length === 0) {
      res.writeHead(httpStatusCodes.NOT_FOUND);
      res.end();
      return;
    }
  
    res.status(httpStatusCodes.OK).json(result)
    res.end();
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  get: _get
}