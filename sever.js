var express = require('express');
var morgan = require('morgan');

var app = express();

// middle war 
app.use(morgan(dev));

app.get('/', function(req, res) {
    var name = 'Ethan';
    res.json("My name is " + name); 
})

app.listen(3000, function(err){
    if (err) throw err;
    console.log("The server is running and listening on port 3000");
});