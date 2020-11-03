const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult,body} = require('express-validator');
const { profile } = require('console');
const { title } = require('process');
const { userInfo } = require('os');

const db = require('../database/models');
const Sequelize = require('sequelize');
const dbusers = require('../data/dbusers');
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

        }else{
            res.render('register',{errors: errors.errors})
        }

    },

    register :(req,res) =>{
        res.render('register')
    },

    Login :(req,res) => {
        res.render('login',{
            title:'Ingresá a tu cuenta',
        })
    },

    process: (req,res) =>{
        db.Users.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user => {
            req.session.user = {
                id: user.id,
                nick: user.nombre + ' ' + user.apellido,
                email: user.email,
            }
            res.locals.user = req.session.user;
            
            return res.render("profile",{
            title:'Bienvenido ' + req.session.user.nick,
            userSession: req.session.user,
            user: user}
            )
        })
        .catch(error => res.send(error))

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
        db.Users.findByPk(req.session.user.id)
        .then(User => {
            res.render('profile',{
                title:"perfil del usuario",
                user: User,
                userSession: req.session.user
               })
        })
        .catch(error => res.send(error))
    },
    processProfile : (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
  
          db.Users.update({
              nombre :req.body.fname ,
              apellido : req.body.lname,
              email: req.body.email,
              direccion: req.body.address,
              telefono: req.body.phone,
              contraseña:bcrypt.hashSync(req.body.pass, 10),
          })
          .then(result=>{
  
              return res.redirect("/users/profile")
          })
          .catch(err=>{
              console.log(err)
          })
  
          }else{
              res.render('profile',{errors: errors.errors})
          }
    }
}