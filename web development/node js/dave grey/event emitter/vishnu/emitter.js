const now = new Date();
const fs = require('fs');
const path = require('path')


function emitter () {
    const timestamp = now.toString() + '\n';
    fs.appendFile(path.join(__dirname, 'myEntries.txt'), timestamp, () => {
        console.log('file created successfully');
    })
    console.log(now);
}


module.exports = emitter;
