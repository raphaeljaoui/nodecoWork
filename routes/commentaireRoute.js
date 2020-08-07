let router  = require('express').Router();

var commentaireController = require('../controllers/commentaireController');

router.route('/api/commentaireFilm')
    .post(commentaireController.newcommentaire)

router.route('/api/deletecommentaireFilm')
    .post(commentaireController.deleteElement)

    router.route('/api/modifycommentaireFilm')
    .post(commentaireController.modifyElement)

router.route('/api/commentaireFilm')
    .get(commentaireController.recupcommentaire)

module.exports = router;