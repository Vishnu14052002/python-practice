const express = require('express');
const app = express();
const PORT = 3000;

const myFirstMiddleWare = (req, res, next) => {
    console.log('this is my first middle ware run on every request');

    next();
};

app.use(myFirstMiddleWare);

app.get('/', (req, res) => {
    res.send('home page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.listen(PORT, ()=> {
    console.log('server is running');
})