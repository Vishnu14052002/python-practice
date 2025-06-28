const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'));

const products = [
    {
        id : 1,
        label : 'product 1'
    },
    {
        id : 2,
        label : 'product 2'
    },
    {
        id : 3,
        label : 'product 3'
    },
    {
        id : 4,
        label : 'product 4'
    },
    {
        id : 5,
        label : 'product 5'
    }
];

app.get('/', (req, res) => {
    res.render('home', {title: 'home', products: products})
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about page'})
});



app.listen(PORT, () => {
    console.log('server is running');
})