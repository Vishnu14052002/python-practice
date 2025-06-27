const fs = require('fs');

fs.readFile('index.txt', 'utf-8', (err, data) => {
    err ? console.log(err) : console.log(data)
});