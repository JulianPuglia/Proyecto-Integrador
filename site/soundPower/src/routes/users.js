var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController.js');
const {check, validationResult, body} = require('express-validator');
const loginValidator = require('../validator/loginValidator.js');
const registerValidator = require('../validator/registerValidator.js');
const upAvatar = require('../middlewares/upAvatar')
var urlencodedParser = express.urlencoded({extended: false}); 

/* register page */
router.get('/register', controller.register);
router.post('/register',urlencodedParser,upAvatar.any(),registerValidator,controller.processRegister);

//router.post('/register',controller.save)

// login page
router.get('/login', controller.Login)
router.post('/login',loginValidator,controller.processLogin)

router.get('/profile',controller.profile)
router.post('/profile', controller.processProfile)

// logout
router.get('/logout', controller.logout)
module.exports = router;