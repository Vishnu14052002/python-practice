const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'pages', 'index.html'));
});

app.listen(PORT, () => {
    console.log('server is running');
});