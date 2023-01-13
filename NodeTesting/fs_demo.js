const fs = require("fs");
const path = require("path");

//Create folder

/* fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
    if (err) throw err;
    console.log('Folder created...');
});
 */
//Create and write to file. Won't write the same file twice if it already exists.
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File written to...");

    //File append. These are async functions so we can nest appendFile here as a callback of writeFile.
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " Test case 1",
      (err) => {
        if (err) throw err;
        console.log("File written to...");
      }
    );


  }
);


  //Read file
  fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });


    //Rename file
    fs.rename(
        path.join(__dirname, "/test", "hello.txt"),
        path.join(__dirname, "/test", "helloworld.txt"),
        (err) => {
          if (err) throw err;
          console.log("File renamed...");
        }
      );
    