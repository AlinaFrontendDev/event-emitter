const EventEmitter = require('../src/EventEmitter');

const emitter = new EventEmitter();

const logData = data => console.log('Received:', data);

emitter.on('data', logData);

console.log('Emitting "data" event:');
emitter.emit('data', { message: 'Hello, world!' });

emitter.off('data', logData);

console.log('Emitting "data" event after removing listener:');
emitter.emit('data', { message: 'No listeners should respond' });
