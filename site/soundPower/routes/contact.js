var express = require('express');
var router = express.Router();
var controller = require('../controllers/contactController');

/* POST Cart page */
router.get('/', controller.contact);

module.exports = router;