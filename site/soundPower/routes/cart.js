var express = require('express');
var router = express.Router();
var controller = require('../controllers/CartController');

/* POST Cart page */
router.get('/', controller.Cart);

module.exports = router;