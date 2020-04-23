const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const products = [];

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './', 'public')));

app.get('/admin/products', (req, res) => res.render('admin/products/index', {
    pageTitle: 'Add product'
}));

app.post('/admin/products', (req, res) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/products');
});

app.get('/products', (req, res) => res.render('products/index', {
    pageTitle: 'Products',
    products
}));

app.get('/', (req, res) => res.render('home', {
    pageTitle: 'Home Page'        
}));

app.use((req, res) => res.render('errors/404', {
    pageTitle: 'Page not found!'
}));

app.listen(3000);