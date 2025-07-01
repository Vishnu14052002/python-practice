const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // move this up here

const app = express(); // ✅ define this FIRST
const PORT = 3000;

// Middleware setup
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json()); // also before your routes

// Database connection
mongoose.connect('mongodb+srv://vishnug14052002:vishnu24@cluster0.guzcoui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => { console.log('database connected successfully') })
.catch((err) => { console.log(err) });

// Mongoose model
const userSchema = new mongoose.Schema({
  name_one: String,
  name_two: String
});
const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/user', async (req, res) => {
  const { name_one, name_two } = req.body;
  console.log('Incoming request:', req.body);

  try {
    const newUser = new User({ name_one, name_two });
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to save user' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log('server is running');
});
