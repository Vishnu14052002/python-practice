require('dotenv').config()
const connectToDb = require('./database/db')

const PORT = process.env.PORT;

const express = require('express');
const app = express();



connectToDb();
app.use(express.json());


app.listen(PORT, () => {
    console.log(`server is running in ${PORT}`);
})