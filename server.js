var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); 

var User = require('./models/user');

var app = express();

mongoose.Promise = Promise;

mongoose.connect('mongodb://root:12345@ds147520.mlab.com:47520/ecommerce', function (err){
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database");
    }
});
// middle ware 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/', function(req, res) {
//     var name = 'Ethan';
//     res.json("My name is " + name); 
// });

app.post('/create-user', function(req,res, next) {
    var user = new User();

    user.profile.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email; 

    user.save(function(err){
        if (err) next(err);

        res.json('Successfully created new user'); 
    })
});

app.listen(3000, function(err){
    if (err) throw err;
    console.log("The server is running and listening on port 3000");
});