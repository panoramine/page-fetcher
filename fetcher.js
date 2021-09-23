const request = require("request");
const fs = require("fs");

let arg = process.argv.slice(2);

let url = arg[0];
let path = arg[1];
let size;


const fetcher = function(url, path) {
  request(url, (error, response, body) => {
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err);
        return;
      }
      size = body.length;
      console.log(`Downloaded and saved ${size} bytes to ${path}`);
    });
  });
};

fetcher(url, path);


