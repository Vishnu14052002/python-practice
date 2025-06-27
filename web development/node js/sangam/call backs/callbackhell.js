const fs = require('fs');

fs.readFile('index.txt', 'utf-8', (err, data) => {
    err ? console.log(err) : console.log(data) 

    const upperCase = data.toUpperCase();
    console.log(upperCase);

    fs.writeFile('new.txt', upperCase, (err, data) => {
        err ? console.log(err) : console.log('file created successfully');

        fs.readFile('new.txt', 'utf-8', (err, data) => {
            err ? console.log(err) : console.log(data);
        })
    })
})