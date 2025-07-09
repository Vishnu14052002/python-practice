const express = require('express');
const app = express();
require('dotenv').config();
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

//register users route
const registerUser = require('./routes/userauth/registerUser');
app.use('/user', registerUser);


//login user route
const loginUser = require('./routes/userauth/loginUser');
app.use('/user', loginUser)

//cart details api
const cartItems = require('./routes/dbProductroutes/cartItems');
app.use('/api', cartItems);

// post cart items with user matched cart
const postCartItems = require('./routes/cartCrud/postCartItems');
app.use('/user', postCartItems)

// delete cart items with user matched cart
const deleteCartItems = require('./routes/cartCrud/deleteCartItems');
app.use('/user', deleteCartItems)


app.listen(process.env.PORT, () => {
    console.log(`server is running ${process.env.PORT}`);
})





