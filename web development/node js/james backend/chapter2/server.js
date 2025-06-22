const express = require('express');
const app = express();
const PORT = 8383;

let data = ['vishnu']

app.use(express.json())

console.log('hello world')

app.get('/' , (req, res) => {
    res.send(`
            <body>
                <h1>data </h1>
                <p>${JSON.stringify(data)}</p>
                <a href='/dashboard'>dashboard</a>
            </body
        `);
});

app.get('/dashboard', (req, res) => {
    console.log('i hit /dashboard url')
    res.send(`<h1>dashboard</h1>
        <a href='/'>home</a>
        `)
});

app.get('/api/data', (req, res) => {
    console.log('this is end point data');
    res.send(data);
});

app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    res.send(201);
    data.push(newEntry.name);
    console.log(newEntry);
})

app.delete('/api/data', (req, res) => {
    data.pop();
    console.log('successfully deleted last data in json');
})

app.listen(PORT , () => {console.log(`server started on ${PORT}`)});