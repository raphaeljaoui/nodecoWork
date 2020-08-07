var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: false
    },
    mail:{
        type: String,
        required: false
    },
    password:{
        type: String,
        required: false
    },
    
});

var User = module.exports = mongoose.model('users', userSchema);
module.exports.get = function(callback, limit){
    User.find(callback).limit(limit);
}
