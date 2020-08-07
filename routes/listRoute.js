let router  = require('express').Router();

var listController = require('../controllers/listController');

router.route('/api/listFilm')
    .post(listController.newList)

router.route('/api/deletelistFilm')
    .post(listController.deleteElement)

    router.route('/api/modifylistFilm')
    .post(listController.modifyElement)

router.route('/api/listFilm')
    .get(listController.recupList)

module.exports = router;