const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://vishnug14052002:V@Priya@@@24@cluster0.v5whhe1.mongodb.net/'
).then(() => {console.log('database connected successfully')})
.catch((err) => {console.log(err)});

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    tags : [String],
    createdAt : {type : Date, default: Date.now}
});

