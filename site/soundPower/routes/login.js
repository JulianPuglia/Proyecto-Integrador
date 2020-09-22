var express = require('express');
var router = express.Router();
var controller = require('../controllers/loginController');

/* POST register page */
router.get('/', controller.login);

module.exports = router;