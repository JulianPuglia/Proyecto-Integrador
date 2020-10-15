const dbProducts = require('../data/database') //requiero la base de datos de productos
const fs = require('fs');
const path = require('path');

module.exports = {
    'products' : (req, res) => {
        res.render('products',{
            title:"Productos",
            producto: dbProducts,
            
        })
    },
    'productsDetails' : (req, res) => {
        let id = req.params.id
        let productoSeleccionado;
        dbProducts.forEach(producto => {
            if(dbProducts.id == id){
                productoSeleccionado = producto
            }
        });
        res.render('productDetails',{
           title: "Detalle de producto"
        })
    },
    'productsAdd' : (req, res) => {
        res.render('productAdd',{
            title:"Agregar Productos"
        })
    },
    'cart' : (req, res) => {
        res.render('cart',{
            title:"Carrito"
        })
    }
}

