const express = require('express');
const ejs = require('ejs');

const bodyParser = require('body-parser');
const path = require('path');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './', 'public')));

app.use('/admin', admin.router);
app.use(shopRoutes);

app.listen(3000);