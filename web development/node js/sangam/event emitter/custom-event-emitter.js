const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greetingMessage = 'hello'; // renamed to avoid conflict
  }

  greet(name) {
    this.emit('greeting', `${this.greetingMessage}, ${name}`);
  }
}

const myEmitter = new MyCustomEmitter();

myEmitter.on('greeting', (message) => {
  console.log(`Greeting received: ${message}`);
});

myEmitter.greet('Vishnu');
