const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const dbusers = require('../data/dbusers');
const {check, validationResult,body} = require('express-validator');
const { profile } = require('console');
const { title } = require('process');
const { userInfo } = require('os');

const db = require('../database/models');
const Sequelize = require('sequelize');
let Op = Sequelize.Op;

module.exports = {

    save : (req, res) => {

      let errors = validationResult(req);
      if(errors.isEmpty()){

        db.Users.create({
            nombre :req.body.fname ,
            apellido : req.body.lname,
            email: req.body.email,
            contraseña:bcrypt.hashSync(req.body.pass, 10),
        })
        .then(result=>{

            return res.redirect("/users/login")
        })
        .catch(err=>{
            console.log(err)
        })
        // let id = dbusers.length;
        // //Crear nuevos usuarios        
        // let newUser ={
        //     id: id +1,
        //     email: req.body.email,
        //     password:bcrypt.hashSync(req.body.pass, 10),
        //     confirmpassword:bcrypt.hashSync(req.body.cpass,10),
        //     name: req.body.fname,
        //     lastName: req.body.lname,
        //     phone: req.body.phone,
        //     address: req.body.address
             
        // }
        
        // dbusers.push(newUser);
        // fs.writeFileSync(path.join(__dirname,'..', 'data', 'users.json'),JSON.stringify(dbusers),'utf-8')
        
        // res.render('login',{
        //     title:"login"
        // })

        }else{
            res.render('register',{errors: errors.errors})
        }

    },

    register :(req,res) =>{
        res.render('register')
    },

    Login :(req,res) => {
        res.render('login')
    },

    process: (req,res) =>{
        db.Users.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user => {
            
            

            return redirect("")
        })
        
        //let errors = validationResult(req);
        //if(errors.isEmpty()){
        //dbusers.filter(usuario=>{
      //return usuario.id, usuario.email, usuario.pass
//})
//} else {
    //res.render('login', {errors: errors.errors})
//}
        //res.render('login')
        
    },

    profile :(req,res) =>{
        res.render('profile',{
            title:"perfil del usuario",
           })
    }
}