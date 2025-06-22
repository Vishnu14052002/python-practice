const express = require('express');
const app = express();
const PORT = 8383;

console.log('hello world')

app.listen(PORT , () => {console.log(`server started on ${PORT}`)});