const fs = require('fs');

const rs = fs.createReadStream('bigText.txt', {encoding: 'utf-8'});

const ws = fs.createWriteStream('bigTextNew.txt');

// rs.on('data', (dataChunk) => {
//     console.log(dataChunk)
// })

rs.pipe(ws);