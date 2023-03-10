//Gives info about environment and OS

const os = require('os');

//Platform
console.log(os.platform());

//win32 = windows
//darwin = mac

//CPU Arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total memory
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Uptime
console.log(os.uptime());