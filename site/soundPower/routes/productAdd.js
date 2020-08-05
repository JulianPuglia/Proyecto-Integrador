var express = require('express');
var router = express.Router();
var productAddController = require('../controllers/productsAddController')

/* GET productAdd page */
router.get('/', productAddController.productAdd);

module.exports = router;