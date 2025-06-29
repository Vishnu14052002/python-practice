const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.use((req, res, next) => {
    const now = new Date().toISOString(); // current time in readable format
    console.log(`[${now}] ${req.method} ${req.url}`);
    next(); // move to the next middleware or route
});

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



// update -- put request
app.put('/api/:id', (req, res) => {
    const bookId = req.params.id;
    const { name } = req.body;

    if(!name) {
        return res.status(400).json({error: 'book id not found'});
    }

    const book = books.find((e) => e.id == bookId);

    book.name = name;

    res.status(400).json(book);
})



// delete request
app.delete('/api/:id', (req, res) => {
    const bookId = req.params.id;
    
    const bookIndex = books.findIndex((e) => e.id == bookId);
    const deletedBook = books.splice(bookIndex, 1);

    res.status(200).json(deletedBook);
})


app.listen(PORT, () => {
    console.log('hello world');
});