const express = require('express');
const app = express();
require('dotenv').config();


const productAPI = require('./all routes/product route/productAPI');
app.use('/api',productAPI)




app.listen(process.env.PORT, () => {
    console.log(`server is running in PORT ${process.env.PORT}`)
});