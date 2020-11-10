var express = require('express');
var router = express.Router();
var Controller = require('../controllers/productsControllers')
const imagenProducts = require('../middlewares/imagenProducts')
/* GET products page. */
router.get('/', Controller.products);
/* GET product Detail page*/
router.get('/details/:id', Controller.productsDetails);
/* GET product Detail page*/
router.get('/add', Controller.productsAdd);
/* POST productDetails */
router.post('/add',imagenProducts.any(),Controller.publicar)

/* GET/POST Cart page */
router.get('/cart', Controller.cart)

router.get('/:id/modify',Controller.modify)
//router.post('/modify', Controller.save)
router.get('/:category',Controller.category)

router.get('/oportunidad/discount',Controller.discount)


module.exports = router;