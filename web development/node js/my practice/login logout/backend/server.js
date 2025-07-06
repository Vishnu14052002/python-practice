const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
app.use(express.json());

const saltRound = 10;

mongoose.connect(process.env.mongoDb)
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


app.post('/login', async (req, res) => {
    const {email, password} = req.body; 
    const user = await user_details.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    const token = jwt.sign(email,process.env.my_token)

    console.log(token)
    if(isMatch){
        res.status(400).json({
            'message' : `login successfull ${user.name}`,
            'token' : token
        })
    }

})



app.listen(process.env.PORT, () => {
    console.log('server is running');
})

