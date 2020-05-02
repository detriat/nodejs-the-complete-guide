const express = require('express');

const router = express.Router();

const products = [];

router.get('/products', (req, res) => res.render('admin/products/index', {
    pageTitle: 'Add product'
}));

router.post('/products', (req, res) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/products');
});

module.exports.router = router;
module.exports.products = products;