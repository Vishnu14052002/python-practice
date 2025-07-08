const express = require('express');
const app = express();
const mongoose = require('./database connection/dbConnection');
app.use(express.json());


// to upload any products
const productPostRoute = require('./routes/dbProductroutes/productPostRoute');
app.use('/api', productPostRoute);

// all products list api
const productsGetApi = require('./routes/dbProductroutes/producsGetApi');
app.use('/api', productsGetApi);

// single product with id
const productsGetWithId = require('./routes/dbProductroutes/productsGetWithId');
app.use('/api', productsGetWithId);



app.listen(3000, () => {
    console.log('server is running');
})




