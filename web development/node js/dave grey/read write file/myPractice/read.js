const fs = require('fs');

const path = require('path'); // use this to work good in all the operating system.

const data = fs.readFile(path.join(__dirname, 'hello.txt'),'utf-8', (err,data) => {
    if(err){
        console.log('There is error');
    }
    else{
        console.log(data);
    }
});

console.log(data);