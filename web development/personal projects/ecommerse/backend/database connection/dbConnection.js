const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vishnug14052002:vishnu24@cluster0.06jdeot.mongodb.net/')
.then(() => {console.log('database connected successfully')})
.catch((err) => {console.log(err)});


module.exports = mongoose