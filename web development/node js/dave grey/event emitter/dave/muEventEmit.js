const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('hello' , () => {
    console.log('event is emmited');
});

myEmitter.emit('hello')