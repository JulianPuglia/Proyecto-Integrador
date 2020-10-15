var express = require('express');
var router = express.Router();
var Controller = require('../controllers/productsControllers')

/* GET products page. */
router.get('/', Controller.products);
/* GET product Detail page*/
router.get('/details/:id', Controller.productsDetails);
/* GET product Detail page*/
router.get('/add', Controller.productsAdd);
/* POST productDetails */
router.post('/add',Controller.productsAdd)
/* GET/POST Cart page */
router.get('/cart', Controller.cart)


module.exports = router;