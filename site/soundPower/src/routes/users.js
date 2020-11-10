var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController.js');
const {check, validationResult, body} = require('express-validator');
const loginValidator = require('../validator/loginValidator.js');
const registerValidator = require('../validator/registerValidator.js');
const upAvatar = require('../middlewares/upAvatar')

/* POST register page */
router.get('/register', controller.register);
<<<<<<< HEAD
router.post('/register',registerValidator,upAvatar.any(),controller.save);
=======
router.post('/register',registerValidator,uploadAvatar.any(),controller.processRegister);
>>>>>>> bfa9e5e37c379b3d23fd2d9231355bd2ae64500c
//router.post('/register',controller.save)

router.get('/login', controller.Login)
router.post('/login',loginValidator,controller.processLogin)

router.get('/profile',controller.profile)
router.post('/profile', controller.processProfile)

module.exports = router;