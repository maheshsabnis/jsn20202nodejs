// 1. load the fs module
var fs = require('fs');

// synchronous write
fs.writeFileSync('myfile.txt','The file is written using fs module');

// synchronous read

var data = fs.readFileSync('myfile.txt');
console.log(data.toString()); 