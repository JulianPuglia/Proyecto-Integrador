var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController.js');

/* POST register page */
router.get('/register', controller.Register);
//router.post('/register',controller.save)
router.get('/login', controller.Login)

module.exports = router;