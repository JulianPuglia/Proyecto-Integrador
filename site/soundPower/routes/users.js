var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController.js');
const {check, validationResult, body} = require('express-validator')
/* POST register page */
router.get('/register', controller.register);
//Validaciones
router.post('/register',[
    check('email').isEmail(),
    check('pass').isLength({min:8}),
    check('cpass').isLength({min:8}),
    check('fname').isLength(),
    check('lname').isLength(),
    check('phone').isInt({min:0}),
    check('address').isLength()
],controller.save);
//router.post('/register',controller.save)
router.get('/login', controller.Login)
//router.post('login',controller.process)//

module.exports = router;