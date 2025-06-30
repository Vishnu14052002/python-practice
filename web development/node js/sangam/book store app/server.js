require('dotenv').config()
const connectToDb = require('./database/db')
const bookRoutes = require('./routes/book-routes')

const PORT = process.env.PORT;

const express = require('express');
const app = express();

app.use('/api/books', bookRoutes)


connectToDb();
app.use(express.json());


app.listen(PORT, () => {
    console.log(`server is running in ${PORT}`);
})