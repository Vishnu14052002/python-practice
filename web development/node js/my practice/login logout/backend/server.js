const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
app.use(express.json());

const saltRound = 10;

mongoose.connect('mongodb+srv://vishnug14052002:vishnu24@cluster0.guzcoui.mongodb.net/')
.then(() => {console.log('database connected successfully')})
.catch((err)=> {console.log(err)});

const usersSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const user_details = mongoose.model('user_details', usersSchema)

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    console.log(name, email, password);
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new user_details({
        name,
        email,
        password: hashedPassword
    });
    
    await newUser.save();


    res.status(400).json({
        'message' : 'registration successfull'
    })
})






app.listen(process.env.PORT, () => {
    console.log('server is running');
})

