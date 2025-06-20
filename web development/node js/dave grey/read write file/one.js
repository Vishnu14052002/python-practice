const fs = require('fs');

const path = require('path');

fs.readFile(path.join(__dirname, 'one.js'), 'utf-8', (err, data) => {
    if(err) throw err;
    // console.log(data)
});

fs.writeFile(path.join(__dirname, 'dummy.txt'), 'Hello from Dave Gray Node.js tutorial!', (err) => {
    if(err) throw err;
    console.log('file created successfully')

    fs.appendFile(path.join(__dirname, 'dummy.txt'), '\n\njust an append', (err) => {
        if(err) throw err;
        console.log('append created successfully')

        fs.rename(path.join(__dirname, 'dummy.txt'), path.join(__dirname, 'nameChange.txt'), (err) => {
            if(err) throw err;
            console.log('rename done successfully')
        });
    });
});



process.on('uncaughtException', err => {
    console.log(err);
    process.exit(1);
})

console.log('last code');