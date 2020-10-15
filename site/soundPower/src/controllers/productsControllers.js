const dbProducts = require('../data/database') //requiero la base de datos de productos
const fs = require('fs');
const path = require('path');

module.exports = {
    products : (req, res) => {
        res.render('products',{
            title:"Productos",
            producto: dbProducts,
            
        })
    },
    productsDetails : (req, res) => {
        let id = req.params.id;
        let producto = dbProducts.filter(producto => {
            return producto.id == id
        })
        res.render('productDetails', {
            title: "Detalle del Producto",
            id: id,
            producto: producto[0],
            price:producto.price,
            image:producto.image
            
            }
    )
    },
    productsAdd : (req, res) => {
        res.render('productAdd',{
            title:"Agregar Productos"
        })
    },
    cart : (req, res) => {
        res.render('cart',{
            title:"Carrito"
        })
    }
}

