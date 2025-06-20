const path = require('path');

const fsPromise = require('fs').promises;

const fileOps = async () => {
    try{
        const data = await fsPromise.readFile(path.join(__dirname, 'nameChange.txt'), 'utf-8')

        // await fsPromise.unlink(path.join(__dirname, 'nameChange.txt'));  // only one time we can run this code because we dont have name change file after first run
        console.log(data);
        await fsPromise.writeFile(path.join(__dirname, 'newTxtFile.txt'), data);
        await fsPromise.appendFile(path.join(__dirname, 'newTxtFile.txt'), '\n\nhello world');
        await fsPromise.rename(path.join(__dirname, 'newTxtFile.txt'), path.join(__dirname, 'newFileName.txt'));
        const newData = await fsPromise.readFile(path.join(__dirname, 'newFileName.txt'), 'utf-8')
        console.log(newData);
    }
    catch(err){
        console.error(err);
    }
}

fileOps();