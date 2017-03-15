var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema; 
// the user schema attributes / characteristics / and fields 

var UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String, 


    profile: {
        name: {type: String, deafault: ''},
        picture: {type: String, default: ''}
    },

    address: String,
    history: [{
        date: Date,
        paid: {type: Number, default: 0},

    }]
    
})