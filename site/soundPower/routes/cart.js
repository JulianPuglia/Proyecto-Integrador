var express = require('express');
var router = express.Router();
var controller = require('../controllers/CartController');

/* GET/POST Cart page */
router.get('/', controller.Cart);

module.exports = router;