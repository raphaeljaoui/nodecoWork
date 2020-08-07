var mongoose = require("mongoose");

var listSchema = mongoose.Schema({
    title:{
        type: String,
        required: false
    },
    overview:{
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
    },
    note:{
        type: String,
        required: false
    },
    type_media:{
        type: Number,
        required: false
    }
});

var List = module.exports = mongoose.model('lists', listSchema);
module.exports.get = function(callback, limit){
    List.find(callback).limit(limit);
}
