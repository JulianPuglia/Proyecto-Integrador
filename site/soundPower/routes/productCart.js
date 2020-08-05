var express = require('express');
var router = express.Router();
var productCartController = require('../controllers/productCartContorller')

/*GET productCart page*/
router.get('/', productCartController.productCart);


module.exports = router;