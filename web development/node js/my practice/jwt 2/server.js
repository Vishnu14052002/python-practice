const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

app.get('/posts', authentication, (req, res) => {
    const userName = req.user
    const actualUser = users.find(r => r.name == userName)
    console.log(actualUser)
    res.json(actualUser);
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
        const token = jwt.sign(name, process.env.my_token_code)
        console.log(token)
        res.status(200).json({
            'message' : 'login successfull',
            'token' : token
        })
    }
    else{
        console.log('login failed');
        res.status(400).json({
            'message' : 'login failed'
        })
    }
})

// middleware usage

function authentication (req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    jwt.verify(token, process.env.my_token_code, (err, users) => {
        if (err) return res.status(403).json({
            'message' : 'something went wrong'
        });
        req.user = users;
        next();
    })
    console.log(authHeader)
}

app.listen(process.env.PORT, () => {
    console.log('server is running');
})