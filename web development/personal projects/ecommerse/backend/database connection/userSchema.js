const mongoose = require('./dbConnection');

const cartItemSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    images: [String]
});

const User = {
    name : String,
    email : String,
    number : Number,
    address : String,
    password : String,
    cart: [cartItemSchema]
}

const Users = mongoose.model('UserDetails', User);

module.exports = Users;