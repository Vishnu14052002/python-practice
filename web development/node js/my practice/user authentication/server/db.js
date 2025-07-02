const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = () =>{ 
    mongoose.connect(process.env.mongoDB)
    .then(() => {console.log('database connected successfully')})
    .catch((err) => {console.log(err)});
}

module.exports = dbConnection;
