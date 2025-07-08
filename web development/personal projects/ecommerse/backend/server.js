const express = require('express');
const app = express();
const Product = require('./dbconnection/productsSchema');

require('dotenv').config();


const productAPI = require('./all routes/product route/productAPI');
app.use('/api',productAPI)

const productPost = require('./all routes/product route/productPost');
app.use('/api', productPost)



app.listen(process.env.PORT, () => {
    console.log(`server is running in PORT ${process.env.PORT}`)
});