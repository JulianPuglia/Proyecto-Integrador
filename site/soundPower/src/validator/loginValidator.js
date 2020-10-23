const dbusers = require('../data/dbusers');
const {check, validationResult,body} = require('express-validator');

module.exports= [
    check('email').isEmail().withMessage('email invalido'),
    check('pass').isLength({min:8}).withMessage('contraseña invalida')
]