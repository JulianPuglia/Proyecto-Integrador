const { products } = require("./productsControllers")
let dbProduct = require('../data/database')

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
            title:"Preguntas Frecuentes"
        })
    },
    contact : (req, res) => {
        res.render('contact',{
            title:"Contacto"
        })
    }
}
