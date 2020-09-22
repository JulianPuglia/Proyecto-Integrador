var express = require('express');
var router = express.Router();
var controller = require('../controllers/contactController');

/* GET/POST Cart page */
router.get('/', controller.contact);
router.post('/',controller.contact)

module.exports = router;