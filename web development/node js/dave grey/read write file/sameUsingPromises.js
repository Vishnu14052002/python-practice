const path = require('path');

const fsPromise = require('fs').promises;

const fileOps = async () => {
    try{
        const data = await fsPromise.readFile(path.join(__dirname, 'nameChange.txt'), 'utf-8')
        console.log(data);
        await fsPromise.writeFile(path.join(__dirname, 'newTxtFile.txt'), data);
        await fsPromise.appendFile(path.join(__dirname, 'newTxtFile.txt'), '\n\nhello world');
        await fsPromise.rename(path.join(__dirname, 'newTxtFile.txt'), path.join(__dirname, 'newFileName.txt'));
    }
    catch(err){
        console.error(err);
    }
}

fileOps();