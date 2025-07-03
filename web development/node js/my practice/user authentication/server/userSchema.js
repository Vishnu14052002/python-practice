const mongoose = require('mongoose');

const newUserSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    number : {
        type : Number,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
        unique : true,
    },
    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    }
});

// export modules
module.exports = mongoose.model('userAuth', newUserSchema);