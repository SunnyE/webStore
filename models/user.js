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

UserSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) return(next(err));
            user.password = hash;
            next(); 
        });
    });
});

UserSchema.pre('save', function(next){
    var user = this;
    
})

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}
