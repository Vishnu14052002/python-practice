const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const path = require('path');
const fsPromise = require('fs').promises;

const logEvents = async(message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}`
    console.log(logItem);
    try{
        await fsPromise.appendFile(path.join(__dirname, 'eventLog.txt'), logItem); 
    }catch(err){
        console.log(err);
    }
}


module.exports = logEvents;