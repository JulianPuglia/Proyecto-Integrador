var express = require('express');
var router = express.Router();
var Controller = require('../controllers/productsControllers')

/* GET products page. */
router.get('/', Controller.products);
/* GET product Detail page*/
router.get('/details/:id', Controller.productsDetails);
/* GET product Detail page*/
router.get('/add', Controller.productAdd);
/* POST productDetails */
router.post('/add',Controller.productAdd)


module.exports = router;