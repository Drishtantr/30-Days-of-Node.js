const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called');
});

//Register a listener
emitter.on('Apple', function() {
    console.log('I am an apple.');
});

// Raising an event
emitter.emit('messageLogged');
emitter.emit('Apple');
