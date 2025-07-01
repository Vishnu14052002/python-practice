const Book = require('../models/book');


const getAllBooks = async (req, res) => {

};

const getSingleBookById = async (req, res) => {

};

const addNewBook = async (req, res) => {
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if(newlyCreatedBook){
            res.status(200).json({
                success : true,
                message : 'Book added successfully',
                data : newlyCreatedBook
            })
        }
    }
    catch(e){
        console.log(e);
    }
};

const updateBook = async (req, res) => {

};

const deleteBook = async (req, res) => {

};


module.exports = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook}

