const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;


let books = [
    {
        id : 1,
        title: 'Book 1'
    },
    {
        id : 2,
        title: 'Book 2'
    },
    {
        id : 3,
        title: 'Book 3'
    }
]


app.get('/', (req, res) => {
    res.json({
        message: 'welcome to our book store api',
    });
});


app.get('/get', (req, res) => {
    res.json(books);
})


app.get('/get/:id', (req, res) => {
    const book = books.find(item => item.id === parseInt(req.params.id));
    if(book){
        res.status(200).json(book);
    }
    else{
        res.status(404).json({
            message: 'book not found'
        });
    }
})


//put means update existing data

app.put('/update/:id', (req, res) => {
    const findCurrentBook = books.find(bookItem => bookItem.id === parseInt(req.params.id));
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title;

        res.status(200).json({
            message : 'book is updated successfully',
            data :findCurrentBook
        })
    }
    else{
        res.status(404).json({
            message : 'book not found'
        })
    }


});


// post request is creating new data
app.post('/add', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: `Book ${books.length + 1}`
    }

    books.push(newBook)
    res.status(200).json({
        data : newBook,
        message: 'new book added successfully'
    });
});




app.listen(PORT, () => {
    console.log('server is running');
})