const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://vishnug14052002:vishnu24@cluster0.guzcoui.mongodb.net/')
.then(() => {console.log('database connected successfully')})
.catch((err)=> {console.log(err)});

const usersSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const user_details = mongoose.model('users', usersSchema)

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    console.log(name, email, password);
})

app.listen(process.env.PORT, () => {
    console.log('server is running');
})

