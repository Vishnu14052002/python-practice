const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

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
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
});



// create -- post request
app.post('/api', (req, res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({ error: 'Book name is required' });
    }

    const bookName = {
        id : books.length + 1,
        name
    };

    books.push(bookName);
    res.status(201).json(bookName);
});


app.listen(PORT, () => {
    console.log('hello world');
});