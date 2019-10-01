const method = require('../../src/controllers/products')
const router = require('express').Router();


module.exports = router;

router.get('/:category', method.get);
