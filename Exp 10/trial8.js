const event = require('events');

const emitter = new event.EventEmitter();

emitter.on('database', function(){
    console.log('Database Connected');
})

emittermitter.emit('database');