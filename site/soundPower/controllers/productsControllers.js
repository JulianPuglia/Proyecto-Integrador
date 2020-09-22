const fs = require('fs')
const path = require('path')

//let productos = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf8')
//let dbProductos=JSON.parse(productos);

module.exports = {
    'products' : (req, res) => {
        res.render('products',{
            title:"Productos"
        })
    },
    'productsDetails' : (req, res) => {
        //let id = req.params.id
        //let productoSeleccionado;
        //dbProductos.forEach(producto => {
            //if(dbProductos.id == id){
                //productoSeleccionado = producto
            //}
        //});
        res.render('productDetails',{
           title: "Detalle de producto"
        })
    },
    'productAdd' : (req, res) => {
        res.render('productAdd',{
            title:"Agregar Productos"
        })
    }

}