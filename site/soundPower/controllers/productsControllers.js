module.exports = {
    'products' : (req, res) => {
        res.render('products')
    },
    'productsDetails' : (req, res) => {
        res.render('productDetails')
    },
    'productAdd' : (req, res) => {
        res.render('productAdd')
    }

}