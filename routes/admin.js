const express = require('express');

const router = express.Router();

const products = [];
const users = [];

router.get('/products', (req, res) => res.render('admin/products/index', {
    pageTitle: 'Add product'
}));

router.post('/products', (req, res) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/products');
});

router.post('/users', (req, res) => {
    const { name = '', age } = req.body;

    users.push({
        name,
        age 
    });
    res.redirect('/users');
});

module.exports.router = router;
module.exports.products = products;
module.exports.users = users;