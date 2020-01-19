// create a simple web server using 'http'
// the 'http' is standard Node.js module to create a simple http server
// it provides 'createServer()' method to create server

// it ptovides 'listen()' method to expose port on which the web server
// will accepts requests and generate responses

// 1. load and cache the module
var http = require('http');

var products = [
     {PrdId:101, PrdName:'Laptop', CatName:'ECT', Price:1000},
     {PrdId:102, PrdName:'Iron', CatName:'ECL', Price:200},
     {PrdId:103, PrdName:'Biscuts', CatName:'FOD', Price:30}
];


// create a server
// the createServer() method accepts 'requestListener' callback function to
// manage requests and response
// request --> Incomming message as http object
// response --> server response as response object
var server = http.createServer(function(req,resp){
     var filter = req.url;
   //  console.log(filter);
     var actData = filter.split('/');
     console.log(actData[1]);
     var dataResponse = [];
     for(var i=0; i< products.length;i++){
          if(products[i].CatName === 'ECT'){
               dataResponse.push(products[i]);
          }
     }
console.log(JSON.stringify(dataResponse));
     resp.write(JSON.stringify(dataResponse)); // writing response
     
     resp.end(); // end the current response
});
// start listening on port
server.listen(6060);
console.log('Listening on port 6060');
