const { products } = require("./productsControllers")
let dbProduct = require('../data/database')
const dbFaqs = require('../data/faqs') //requiero la base de datos de productos
const fs = require('fs');
const path = require('path');


module.exports = {
    index : (req, res) => {
        
        let destacados = dbProduct.filter(product =>{
            return product.id == req.body.id
        })       
        res.render('index', { 
            title: 'SoundPower', 
            destacados: destacados     
        })
    },
    faqs : (req, res) => {
        res.render('faqs',{
            title:"Preguntas Frecuentes",
            faqs:dbFaqs
        })
    },
    contact : (req, res) => {
        res.render('contact',{
            title:"Contacto"
        })
    },
    search:(req, res) =>{
        //let buscar = req.query.search
        //res.render('products',{
        //title:"Resultado de Busqueda",
        //buscar:buscar})
    }
}
