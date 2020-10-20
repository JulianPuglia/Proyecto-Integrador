var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController.js');
const {check, validationResult, body} = require('express-validator')
/* POST register page */
router.get('/register', controller.register);
//Validaciones
router.post('/register',[
    check('email').isEmail().withMessage('Debes ingresar un email valido'),
    check('pass').isLength({min:8}).withMessage('Debes ingresar una contraseña'),
    check('cpass').isLength({min:8}).withMessage('Debes ingresar una contraseña'),
    check('fname').isLength().withMessage('Debes ingresar un nombre'),
    check('lname').isLength().withMessage('Debes ingresar un apellido'),
    check('phone').isInt({min:0}).withMessage('Debes llenar este campo'),
    check('address').isLength().withMessage('Debes llenar este campo')
],controller.save);
//router.post('/register',controller.save)
router.get('/login', controller.Login)
router.post('login',controller.process)//
router.get('/profile',controller.profile)

module.exports = router;