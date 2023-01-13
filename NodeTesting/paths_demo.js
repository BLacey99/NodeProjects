/* const path = require('path');

//console.log(__dirname);

//console.log(__filename);

const consoleBlocker = console.log("=================================================");

//console.log(path);

//Base File name
console.log(path.basename(__filename));
console.log("=================================================");

//Directory name
console.log(path.dirname(__filename));
console.log("=================================================");

//File extension
console.log(path.extname(__filename));
console.log("=================================================");

//Create path object
console.log(path.parse(__filename));
console.log("=================================================");

//Single out a property of the path object
console.log(path.parse(__filename).base);
console.log("=================================================");


//Concatenate paths. Helps with delimiters. Some systems use /, some use \, this auto configures instead.
console.log(path.join(__dirname, 'test', 'hello.html')); */



const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener:`,data));

logger.log('Hello World');

logger.log('Yeet');

logger.log('Test');