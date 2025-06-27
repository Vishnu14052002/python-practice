const EventEmitter = require('events');
const { emit } = require('process');

const firstEventEmitter = new EventEmitter();

firstEventEmitter.on('greet' ,(name) => {
    console.log('hello', name);
})

firstEventEmitter.emit('greet', 'vishnu')