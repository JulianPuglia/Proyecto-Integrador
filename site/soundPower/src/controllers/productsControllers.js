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
    },
    modify: (req,res)=>{
        let id = req.params.id;
        let producto = dbProducts.filter(producto => {
            return producto.id == id
        })
        res.render('modifyProduct', {
            title: "Modificar Productos",
            id: id,
            producto: producto[0],
            price:producto.price,
            image:producto.image,
            description:producto.description,
            category:producto.category

        })
      },
        category : (req,res)=>{
            let category = req.params.category;
            let producto = dbProducts.filter(producto => {
                return producto.category == category
            })
            res.render('category', {
                
                title: "Categoria "+ category.toUpperCase(),
                producto:producto,
                price:producto.price,
                image:producto.image
        })
    }
}
