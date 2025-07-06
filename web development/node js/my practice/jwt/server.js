const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();
const PORT = 3000;

app.use(express.json());

const posts = [
    {
        name : 'vishnu',
        label : 1
    },
    {
        name : 'priya',
        label : 2
    }
]

app.get('/posts', authentication, (req, res) => {
    console.log(req.user)
    res.send(posts)
})

app.post('/login', (req, res) => {
    const name = req.body.name;
    console.log('login page', name)
    const token = jwt.sign({name}, process.env.JWT_SECRET);
    console.log(token);
    res.json({ token });
})

// middleware

function authentication(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    console.log(token)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        console.log('success')
        req.user = user;
        next();
    });
    next();
}



app.listen(PORT, () => {
    console.log('server is running');
})

