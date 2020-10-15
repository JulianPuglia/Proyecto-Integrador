const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const dbusers = require('../data/dbusers');
const {check, validationResult,body} = require('express-validator');
const { profile } = require('console');
const { title } = require('process');
module.exports = {
    save : (req, res) => {


        let id = dbusers.length;
        //Crear nuevos usuarios        
        let newUser ={
            id: id +1,
            email: req.body.email,
            password:bcrypt.hashSync(req.body.pass, 10),
            confirmpassword:bcrypt.hashSync(req.body.cpass,10),
            name: req.body.fname,
            lastName: req.body.lname,
            phone: req.body.phone,
            address: req.body.address
             
        }
        
        dbusers.push(newUser);
        fs.writeFileSync(path.join(__dirname,'..', 'data', 'users.json'),JSON.stringify(dbusers),'utf-8')
        
        res.render('login',{
            title:"login"
        })
   
    },
    register :(req,res) =>{
        res.render('register')
    },
    Login :(req,res) => {
        res.render('login')
    },
    profile :(req,res) =>{
        res.render('profile',{
            title:"perfil del usuario"})
    }
}