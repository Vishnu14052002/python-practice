const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongooseConnection)
.then(() => {console.log('database connected successfully')})
.catch((err) => {console.log(err)});



module.exports = mongoose