var express = require('express');

var app = express();

app.listen(3000, function(err){
    if (err) throw err;
    console.log("The server is running and listening on port 3000");
});