const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors()); 

const saltRound = 10;

mongoose.connect(process.env.mongoDb)
.then(() => {console.log('database connected successfully')})
.catch((err)=> {console.log(err)});

const usersSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    tasks : [
        {
            task: String,
            deadline: String
        }
    ]
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

app.get('/tasks',authentication , async (req, res) => {
    const email = req.user;
    const user = await user_details.findOne({email})

    res.json(user.tasks);
})

app.post('/uploadtask', authentication, async (req, res) => {
    const {taskName, deadline} = req.body;
    const email = req.user;
    try {
        const user = await user_details.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.tasks.push({ task: taskName, deadline });
        await user.save();

        res.json({ message: 'Task added successfully', tasks: user.tasks });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }

})


function authentication(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    jwt.verify(token, process.env.my_token, (err, users) => {
        if(err) return res.status(403).json({
            'message' : 'something went wrong'
        })
        req.user = users;
        next();
    })
}



app.listen(process.env.PORT, () => {
    console.log('server is running');
})

