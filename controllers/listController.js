List = require('../models/listMovieModel');

exports.newList = function(req, res){
    var list = new List();
    
    list.title = req.body.title
    list.overview = req.body.overview
    list.image = req.body.image
    list.note = req.body.note
    list.type_media = req.body.type_media
    list.save(function(err){
        if(err)
            res.json(err);
        res.json({
            list
        })
    })
}

exports.recupList = function(req, res){
    List.find({}, function(err, list){
        if(err)
            res.json(err);
        res.json({
            list
        })
    })
}

exports.deleteElement = function(req, res){
    List.deleteOne({title: req.body.title}, function(err, list){
        if(err)
            res.json(err);
        res.json({
            list
        })
    })
}

exports.modifyElement = function(req, res){
    List.findOne({title: req.body.title}, function(err, list){
        if(err)
            res.json(err);
        if(req.body.overview)
            list.overview = req.body.overview
        list.save(function(err){
        res.json({
            list
        })
    })
})
}