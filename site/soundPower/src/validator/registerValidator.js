const dbusers = require('../data/dbusers');
const {check, validationResult,body} = require('express-validator');

module.exports=[
    check('email').isEmail().withMessage('Debes ingresar un email valido'),
    check('pass').isLength({min:8}).withMessage('Debes ingresar una contraseña'),
    check('cpass').isLength({min:8}).withMessage('Debes ingresar una contraseña'),
    check('fname').isLength().withMessage('Debes ingresar un nombre'),
    check('lname').isLength().withMessage('Debes ingresar un apellido'),
    //check('phone').isInt({min:0}).withMessage('Debes llenar este campo'),
    //check('address').isLength().withMessage('Debes llenar este campo')
]