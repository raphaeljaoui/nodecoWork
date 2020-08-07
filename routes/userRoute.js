let router  = require('express').Router();

var userController = require('../controllers/userController');

router.route('/api/userFilm')
    .post(userController.newUser)

router.route('/api/deleteuserFilm')
    .post(userController.deleteElement)

router.route('/api/modifyuserFilm')
    .post(userController.modifyElement)

router.route('/api/userFilm')
    .get(userController.recupUser)

module.exports = router;