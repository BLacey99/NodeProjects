const EventEmitter = require ('events');

//Create emitter class
class MyEmitter extends EventEmitter{ }


//Init object

const myEmitter = new MyEmitter();

//Event listener
myEmitter.on(`event`, () => console.log('Event Fired!'))
myEmitter.on(`fire`, () => console.log('Fired!'))


//Init event
myEmitter.emit(`event`);
myEmitter.emit(`fire`);
myEmitter.emit(`event`);
myEmitter.emit(`fire`);
myEmitter.emit(`event`);
myEmitter.emit(`event`);