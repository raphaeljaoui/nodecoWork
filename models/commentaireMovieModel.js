var mongoose = require("mongoose");

var commentaireSchema = mongoose.Schema({
    id_movie:{
        type: String,
        required: false
    },
    com:{
        type: String,
        required: false
    },
    note:{
        type: String,
        required: false
    }
});

var Commentaire = module.exports = mongoose.model('commentaires', commentaireSchema);
module.exports.get = function(callback, limit){
    Commentaire.find(callback).limit(limit);
}
