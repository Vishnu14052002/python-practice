const express = require('express');
const app = express();
const mongoose = require('./database connection/dbConnection');

app.use(express.json());

const productPostRoute = require('./routes/dbProductroutes/productPostRoute');
app.use('/api', productPostRoute);

const productsGetApi = require('./routes/dbProductroutes/producsGetApi');
app.use('/api', productsGetApi)

app.listen(3000, () => {
    console.log('server is running');
})




