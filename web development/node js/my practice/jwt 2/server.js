const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();
require('dotenv').config();

app.use(express.json());
const posts = [
    {
        name : 'vishnu',
        postId : 1
    },
    {
        name : 'priya',
        postId : 2
    }
];

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/posts', (req, res) => {
    res.json(posts);
})

app.post('/register', async (req, res) => {
    const {name, password} = req.body;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    users.push(
        {
            'name' : name,
            'password' : hashedPassword
        }
    )
})

app.post('/login', async (req, res) => {
    const {name, password} = req.body;
    const user = users.find(p => p.name == name);
    console.log(user)
    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)
    if(isMatch){
        console.log('login successfull');
        res.status(200).json({
            'message' : 'login successfull'
        })
    }
    else{
        console.log('login failed');
        res.status(400).json({
            'message' : 'login failed'
        })
    }
})

app.listen(process.env.PORT, () => {
    console.log('server is running');
})