const express = require('express');
// const productController = require('../controllers/productController');

const router = express.Router({ mergeParams: true });

router.get('/', () => console.log('teste get user'));

module.exports = router;