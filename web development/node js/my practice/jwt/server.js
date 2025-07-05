const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 3000;

app.use(express.json());

const posts = [
    {
        name : 'vishnu',
        label : 1
    }
]

app.get('/posts', (req, res) => {
    res.send(posts)
})


app.post('/login', (req, res) => {
    const username = req.body.name;
    console.log(username);
    if(username){
        res.status(200).json({
            'message' : 'success'
        })
    }
})


app.listen(PORT, () => {
    console.log('server is running');
})