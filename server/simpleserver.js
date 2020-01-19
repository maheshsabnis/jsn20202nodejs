// create a simple web server using 'http'
// the 'http' is standard Node.js module to create a simple http server
// it provides 'createServer()' method to create server

// it ptovides 'listen()' method to expose port on which the web server
// will accepts requests and generate responses

// 1. load and cache the module
var http = require('http');

// create a server
// the createServer() method accepts 'requestListener' callback function to
// manage requests and response
// request --> Incomming message as http object
// response --> server response as response object
var server = http.createServer(function(req,resp){
     resp.write('Hi I am the Node.js Server'); // writing response
     resp.end(); // end the current response
});
// start listening on port
server.listen(6060);
console.log('Listening on port 6060');
