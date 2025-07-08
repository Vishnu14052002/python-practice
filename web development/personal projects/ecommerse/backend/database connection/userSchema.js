const mongoose = require('./dbConnection');

const User = {
    name : String,
    email : String,
    number : Number,
    address : String,
    password : String,
    cartList : Array
}

const Users = mongoose.model('UserDetails', User);

module.exports = Users;