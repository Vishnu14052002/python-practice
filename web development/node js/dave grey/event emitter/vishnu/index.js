const emitter = require('./emitter');

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('time', ()=>{
    console.log('logs created');
})

myEmitter.emit('time',emitter())