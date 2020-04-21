const express = require('express');
const bodyParser = require('body-parser');

const routes = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.get('/products', (req, res) => {
    res.send('<form action="/admin/products" method="POST"><input name="title" required /><button type="submit">Add product</button></form>');
});

routes.post('/products', urlencodedParser, (req, res) => {
    res.redirect('/');
});

module.exports = routes;