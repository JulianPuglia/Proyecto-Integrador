const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

const db = require("../database/models");
const Sequelize = require("sequelize");
let Op = Sequelize.Op;

module.exports = {
  register: (req, res) => {
        res.render("register");
    },

  processRegister: (req, res) => {
    
    let errors = validationResult(req);
    
    if (errors.isEmpty()) {

        db.Users.create({
          nombre: req.body.fname,
          apellido: req.body.lname,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.pass, 10),
          avatar: req.avatar,
          rol:"user"

        })
        .then((result) => {

          return res.redirect("/users/login");

        })
        .catch((err) => {

          console.log( errors.errors )
          res.render("register", { errors: errors.errors ,old:req.body});

        });
    } else {

      console.log( errors.errors )
      res.render("register", { errors: errors.errors ,old:req.body});

    }

  },

  Login: (req, res) => {
    res.render("login", {
      title: "Ingresá a tu cuenta",
    });
  },

  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Users.findOne({
        where: {
          email: req.body.email,
        },
      })
        .then((user) => {
          req.session.user = {
            id: user.id,
            nick: user.nombre + " " + user.apellido,
            email: user.email,
          };
          res.locals.user = req.session.user;

          return res.render("profile", {
            title: "Bienvenido " + req.session.user.nick,
            userSession: req.session.user,
            user: user,
          });
        })
        .catch((error) => res.send(error));
    } else {
      res.render("login", { errors: errors.errors });
    }
  },

  logout: function (req, res) {
    req.session.destroy(); //elimino la sesion

    return res.redirect("/");
    
    },
  

  profile: (req, res) => {
    db.Users.findByPk(req.session.user.id)
      .then((User) => {
        res.render("profile", {
          title: "perfil del usuario",
          user: User,
          userSession: req.session.user,
        });
      })
      .catch((error) => res.send(error));
    },
    
  processProfile: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Users.update({
        nombre: req.body.fname,
        apellido: req.body.lname,
        email: req.body.email,
        direccion: req.body.address,
        telefono: req.body.phone,
        password: bcrypt.hashSync(req.body.pass, 10),
      })
        .then((result) => {
          return res.redirect("/users/profile");
        })
        .catch((err) => {
          console.log(err);
        });
        } else {
            res.render("profile", { errors: errors.errors });
        }
    },
};
