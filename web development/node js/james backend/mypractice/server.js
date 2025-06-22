const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
const data = ['vishnu'];

app.get('/', (req, res) => {
    console.log('home page is opened');
    res.send(`
        <h1>home page</h1>
        <a href='/login'>login</a>
        <p>${JSON.stringify(data)}</p>
        `);
})

app.get('/login', (req, res) => {
    console.log('login page is oppened');
    res.send(`
        <h1>login page<h1>
        <input>
        <a href='/'>home</a>
        `)
})

app.get('/api/data', (req, res) => {
    console.log('api page is opened');
    res.send(data);
});

app.delete('/api/data', (req, res) => {
    console.log('deleted');
    data.pop();
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    res.send(201);
    data.push(newEntry.name);
    console.log(newEntry);
});



app.listen(PORT, () => {
    console.log('server is running successfully');
})

