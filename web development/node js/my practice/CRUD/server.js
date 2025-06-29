const express = require('express');
const app = express();
const PORT = 3000;

const books = [
    {
        id : 1,
        name: 'rich dad poor dad'
    },
    {
        id : 2,
        name: 'subconscious memory power'
    },
    {
        id : 3,
        name: '5 AM club'
    },
];


// read operation
app.get('/api', (req,res) => {
    res.json(books);
});

// read single books using id
app.get('/api/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(u => u.id == bookId);
    res.json(book);
});


app.listen(PORT, () => {
    console.log('hello world');
});