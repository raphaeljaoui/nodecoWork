Commentaire = require('../models/commentaireMovieModel');

exports.newcommentaire = function(req, res){
    var commentaire = new Commentaire();
    
    commentaire.id_movie = req.body.id_movie
    commentaire.com = req.body.com
    commentaire.note = req.body.note
    commentaire.save(function(err){
        if(err)
            res.json(err);
        res.json({
            commentaire
        })
    })
}

exports.recupcommentaire = function(req, res){
    Commentaire.find({}, function(err, commentaire){
        if(err)
            res.json(err);
        res.json({
            commentaire
        })
    })
}

exports.deleteElement = function(req, res){
    Commentaire.deleteOne({id_movie: req.body.id_movie}, function(err, commentaire){
        if(err)
            res.json(err);
        res.json({
            commentaire
        })
    })
}

exports.modifyElement = function(req, res){
    Commentaire.findOne({id_movie: req.body.id_movie}, function(err, commentaire){
        if(err)
            res.json(err);
        if(req.body.com)
            commentaire.com = req.body.com
        commentaire.save(function(err){
        res.json({
            commentaire
        })
    })
})
}