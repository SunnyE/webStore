var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose'); 

var app = express();

mongoose.connect('mongodb://root:12345@ds147520.mlab.com:47520/ecommerce', function (err){
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database");
    }
})
// middle war 
app.use(morgan('dev'));

app.get('/', function(req, res) {
    var name = 'Ethan';
    res.json("My name is " + name); 
})

app.listen(3000, function(err){
    if (err) throw err;
    console.log("The server is running and listening on port 3000");
});