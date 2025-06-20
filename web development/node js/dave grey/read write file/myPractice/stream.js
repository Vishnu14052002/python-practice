const fs = require('fs');
const path = require('path');

const data = fs.createReadStream(path.join(__dirname, 'bigTextNew.txt'),{encoding: 'utf-8'})

const data2 = fs.createWriteStream(path.join(__dirname, 'bigTextNew2.txt'))

data.on('data', (data) => {
    console.log(data);
})

data.pipe(data2)