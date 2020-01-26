// 1. load and chache express, body-parser, cors, mongoose

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


// 2. instance of express and then add bodyParser and cors as middleware
var instance  = express();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({extended:false}));
instance.use(cors()); 

// 3. mongoose schema, map with the collection in MongoDB database
var Category= mongoose.Schema({
   CategoryRowId: Number,
   CategoryId: String,
   CategoryName: String,
   BasePrice: Number
});
// 4. mongoose model                model-Name schema-name collection-name
// if the collection is not present it will create a new collection
// when the connection is established and first query is hit to db
var CategoryModel = mongoose.model("Category", Category, "Category");
// 5. connection
var db = mongoose.connect("mongodb://localhost/meandb",{
    useNewUrlParser:true, // Parse Schema and Map with Model
    useUnifiedTopology: true
});

var dbConnection = mongoose.connection; // make sure that the connection is done 
if(!dbConnection){
    console.log('Cannot Connect to the database');
    return;
}
// 6. rest api
// get all request
instance.get('/api/category',function(req,resp) {
      CategoryModel.find().exec(function(err,res) {
         if(err){
             resp.send({statusCode:500, message: err.message});
         }
         resp.send({statusCode:200, data:res});
      });
}); 

// post request
instance.post('/api/category', function(req,resp){
    // read data from request body
    var cat =  {
         CategoryRowId: req.body.CategoryRowId,
         CategoryId: req.body.CategoryId,
         CategoryName: req.body.CategoryName,
         BasePrice: req.body.BasePrice
    };
    CategoryModel.create(cat,function(err,res){
        if(err){
            resp.send({statusCode:500, message: err.message});
        }
        resp.send({statusCode:200, data : res});
    })
});

// get record based on id
instance.get('/api/category/:id',function(req,resp){
    // read id from  request URL parameter
    var id = req.params.id;
    CategoryModel.findOne({_id:id},function(err,doc){
        if(err){
            resp.send({statusCode:500, message: err.message});
        }
        resp.send({statusCode:200, data : doc});
    });
});

// update
instance.put('/api/category/:id',function(req,resp){
    // read id from  request URL parameter
    var id = req.params.id;

     // read data from request body
     var cat =  {
        CategoryRowId: req.body.CategoryRowId,
        CategoryId: req.body.CategoryId,
        CategoryName: req.body.CategoryName,
        BasePrice: req.body.BasePrice
   };

    CategoryModel.findOneAndUpdate({_id:id},cat,function(err,doc){
        if(err){
            resp.send({statusCode:500, message: err.message});
        }
        resp.send({statusCode:200, data : doc});
    });
});
// delete

// 7. listen
instance.listen(9080, function(){
    console.log('rest api is listening on port 9080');
});