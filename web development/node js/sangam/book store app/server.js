require('dotenv').config();
const connectToDb = require('./database/db');
const bookRoutes = require('./routes/book-routes');

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
connectToDb();
// ✅ MUST come before your routes
app.use(express.json());

// Now mount your routes
app.use('/api/books', bookRoutes);

// Connect to MongoDB


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
