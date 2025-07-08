const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vishnug14052002:vishnu24@cluster0.4zwtaam.mongodb.net/',)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });


module.exports = mongoose;