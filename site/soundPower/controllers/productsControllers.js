const productsController = {
    products : (req, res) => {
        res.render('products')
    },
    productsDetails : (req, res) => {
        res.render('productDetails')
    }

}
module.exports = productsController;