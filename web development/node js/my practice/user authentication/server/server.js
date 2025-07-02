const express = require('express');
const app = express();
const dbConnection = require('./db');
require('dotenv').config();
const PORT = process.env.PORT;

dbConnection()


app.listen(PORT , () => {
    console.log(`server is running in port ${PORT}`);
})
