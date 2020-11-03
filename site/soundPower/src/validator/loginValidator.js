const dbusers = require('../data/dbusers');
const {check, validationResult,body} = require('express-validator');
const db = require('../database/models');

module.exports= [
    check('email').isEmail().withMessage('email invalido'),
    check('pass').isLength({min:8}).withMessage('contraseña invalida'),
    body('pass')
    .custom((value,{req})=>{
       /*  let result = true
        dbUsers.forEach(user => {
            if(user.email == req.body.email){
                if(!bcrypt.compareSync(value,user.pass)){
                    result = false
                }
            }
        });
        if (result == false){
            return false
        }else{
            return true
        } */
        return db.Users.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user => {
            if(!bcrypt.compareSync(value,user.dataValues.password)){ //si no machea la contraseña
                return Promise.reject('estas mal')
            }
        })
        .catch(() => {
            return Promise.reject('Credenciales inválidas')
        })
    })
]