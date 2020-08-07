User = require('../models/userMovieModel');

exports.newUser = function(req, res){
    var user = new User();
    
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.mail = req.body.mail
    user.password = req.body.password
    user.save(function(err){
        if(err)
            res.json(err);
        res.json({
            user
        })
    })
}

exports.recupUser = function(req, res){
    User.find({}, function(err, user){
        if(err)
            res.json(err);
        res.json({
            user
        })
    })
}

exports.deleteElement = function(req, res){
    User.deleteOne({mail: req.body.mail}, function(err, user){
        if(err)
            res.json(err);
        res.json({
            user
        })
    })
}

exports.modifyElement = function(req, res){
    User.findOne({mail: req.body.mail}, function(err, user){
        if(err)
            res.json(err);
        if(req.body.firstName)
            user.firstName = req.body.firstName
        user.save(function(err){
        res.json({
            user
        })
    })
})
}