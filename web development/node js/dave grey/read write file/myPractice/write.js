const fs = require('fs');
const path = require('path');

const data = fs.writeFile(path.join(__dirname,'createdFile.txt'), 'new file content', (err) => {
    if(err){
        console.log("somethign is worng")
    }
    else{
        console.log("file created")
    }
});