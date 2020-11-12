var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController.js');
const loginValidator = require('../validator/loginValidator');
const registerValidator = require('../validator/registerValidator');
const upAvatar = require('../middlewares/upAvatar')


/* register page */
router.get('/register', controller.register);
<<<<<<< HEAD
router.post('/register',upAvatar.any(),registerValidator,controller.processRegister);
=======
router.post('/register',upAvatar.any(),registerValidator,controller.save);

>>>>>>> 01d83c7ee6c779bab1339c9a05aa39c60668c98e
//router.post('/register',controller.save)

// login page
router.get('/login', controller.Login)
router.post('/login',loginValidator,controller.processLogin)

router.get('/profile',controller.profile)
router.post('/profile', controller.processProfile)
router.post('/logout', controller.logout)

// logout
router.get('/logout', controller.logout)
module.exports = router;