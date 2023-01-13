const EventEmitter = require ('events');
const fs = require("fs");
const path = require("path");

//npm install uuid, doesn't just come built in anymore.
//CommonJS implementation below.
const { v4: uuidv4 } = require('uuid');




/* console.log(uuidv4());
uuidv4();
uuidv4();
uuidv4(); */


class Logger extends EventEmitter{

    
    log(msg){
        //call event
        let id = uuidv4();
        this.emit('message', {id: id, msg});

        fs.writeFile(
            path.join(__dirname, "/test", "logger.txt"),
            "Begin Logs:\n\n",
            (err) => {
              if (err) throw err;
            }
          );
        
        fs.appendFile(
            path.join(__dirname, "/test", "logger.txt"),
            `${"Message: " + msg +"\nID: " + uuidv4() + "\n\n"}`,
            (err) => {
              if (err) throw err;
              console.log(`Data for process: ${id}`);
          
              //File append. These are async functions so we can nest appendFile here as a callback of writeFile.
          
            }
          );
          
    }
}

module.exports = Logger;