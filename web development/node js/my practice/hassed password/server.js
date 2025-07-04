const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;
const saltRounds = 10;

app.use(express.json());

const posts = [
    {
        'name' : 'vishnu',
        'id' : 1
    }
]

app.get('/posts',(req, res) => {
    res.send(posts)
})

app.post('/users',async (req, res) => {
    const id = req.body.id;
    const password = req.body.name;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(password);
    posts.push({
        'name' : hashedPassword,
        'id' : id
    });
})

app.post('/postss', async (req, res) => {
    const id = req.body.id;
    const password = req.body.name;
    const user = posts.find(p => p.id == id);
    if(!user){
        res.status(400).json({
            'message' : 'id not found'
        })
    }
    const isMatch = await bcrypt.compare(password,user.name);
    if (isMatch) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid password');
    }
})

app.listen(PORT, ()=> {
    console.log('server is running');
})