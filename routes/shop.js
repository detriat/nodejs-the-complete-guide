const express = require('express');

const router = express.Router();

const products = require('./admin').products;
const users = require('./admin').users;

router.get('/products', (req, res) => res.render('products/index', {
    pageTitle: 'Products',
    products
}));

router.get('/users', (req, res) => res.render('users/index', {
    pageTitle: 'Users',
    users
}));

router.get('/', (req, res) => res.render('home', {
    pageTitle: 'Home Page'        
}));

router.use((req, res) => res.render('errors/404', {
    pageTitle: 'Page not found!'
}));

module.exports = router;