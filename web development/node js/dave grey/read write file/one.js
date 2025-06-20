const fs = require('fs');

const path = require('path');

fs.readFile(path.join(__dirname, 'one.js'), 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data)
});

fs.writeFile(path.join(__dirname, 'dummy.txt'), 'Hello from Dave Gray Node.js tutorial!', (err) => {
    if(err) throw err;
    console.log('file created successfully')
});

fs.appendFile(path.join(__dirname, 'append.txt'), 'Hello from Dave Gray Node.js tutorial append file file!', (err) => {
    if(err) throw err;
    console.log('append created successfully')
});

process.on('uncaughtException', err => {
    console.log(err);
    process.exit(1);
})