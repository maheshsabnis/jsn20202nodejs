// 1. load and cache express, body-parser

var express = require('express');
var bodyParser = require('body-parser');



// 2. create an express instance
var expressObj  =express();
// configure the bodyParser in express instance as middleware
expressObj.use(bodyParser.json());  // format in JSON
expressObj.use(bodyParser.urlencoded({extended:false})); // read only data received from body

// 2a creating data model
var products = [
    {PrdId:101, PrdName:'Laptop', CatName:'ECT', Price:1000},
    {PrdId:102, PrdName:'Iron', CatName:'ECL', Price:200},
    {PrdId:103, PrdName:'Biscuts', CatName:'FOD', Price:30}
];


// 3. define endpoints for expernal communication
// REST Methods to define endpoints e.g. get, post, put, delete
// parameter 1 --> /api/products is the endpoint url as https://localhost:7070/api/products
// parameter 2 --> the callback function for http request processing
// req --> request object to read header parameters  and body
// resp --> response object to HTTP Response
expressObj.get('/api/products', function(req,resp) {
    resp.send({status:200, data:products}); // response in JSON
});

// get request to reaturn product for a specific PrdId
// :id --> header parameter e.g. https://localhost:7070/api/products/101
expressObj.get('/api/products/:id', function(req,resp) {
    var id = req.params.id; // reading the header parameter
    console.log('received id ' + id);

    var filteredProducts = products.filter(function(p,i){
        return p.PrdId == id;
    });

    console.log(JSON.stringify(filteredProducts));
    resp.send({status:200, data:filteredProducts[0]}); // response in JSON
});

// the post endpoint
expressObj.post('/api/products', function(req,resp){
  // read the body
  var reqBody = req.body;
  console.log(JSON.stringify(reqBody));
  products.push(reqBody);
  resp.send({status:200, data:products}); // response in JSON
});

// the put endpoint
expressObj.put('/api/products/:id', function(req,resp){
    // read the header parameter
    // serach record from array based on id
    // update the record from array (use idnexOf to search record)
    // respond updated array
    resp.send({status:200, data:products}); // response in JSON
  });

  // the delete endpoint
expressObj.delete('/api/products/:id', function(req,resp){
    // read the header parameter
    // serach record from array based on id
    // delete the record using splice() method
    // respond updated array
    resp.send({status:200, data:products}); // response in JSON
  });


// 4. start listening on port
expressObj.listen(7070, function(){
    console.log('Express Server Started in port 7070');
});

