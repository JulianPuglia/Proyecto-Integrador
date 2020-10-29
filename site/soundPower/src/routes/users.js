var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController.js');
const {check, validationResult, body} = require('express-validator');
const loginValidator = require('../validator/loginValidator.js');
const registerValidator = require('../validator/registerValidator.js');

/* POST register page */
router.get('/register', controller.register);
router.post('/register',registerValidator,controller.save);
//router.post('/register',controller.save)

router.get('/login', controller.Login)
router.post('/login',loginValidator,controller.process)

router.get('/profile',controller.profile)

module.exports = router;