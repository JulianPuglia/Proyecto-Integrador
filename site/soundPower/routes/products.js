var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsControllers')

/* GET products page. */
router.get('/', productsController.products);
/* GET product Detail page*/
router.get('/productsDetails', productsController.productsDetails)


module.exports = router;