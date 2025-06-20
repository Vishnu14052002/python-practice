const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), 'utf-8', (err, data) => {
    console.log(data)
});

fs.writeFile(path.join(__dirname, 'allTxtFile.txt'), 'new file created', (err) => {
    console.log('file created successfully');
})

fs.rename(path.join(__dirname, 'rename1.txt'),path.join(__dirname, 'rename2.txt'), (err) => {
    console.log('successfulllu remaned')
});

fs.appendFile(path.join(__dirname, 'rename2.txt'), '\n\nappended the text', ()=>{
    console.log('appended successfully')
})