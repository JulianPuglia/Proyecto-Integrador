var express = require('express');
var router = express.Router();
let controller = require ('../controllers/indexController');

/* GET homepage. */
router.get('/', controller.index);

router.get('/faqs',controller.faqs);

router.get('/contact',controller.contact);
router.post('/contact',controller.submit)

router.get('/search',controller.search);

module.exports = router;