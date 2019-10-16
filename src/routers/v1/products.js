const product = require('../../controllers/products');
const router = require('express').Router();

router.get('/:category', product.get);

module.exports = router;
