const router   = require('express').Router();
const BASE_URL = '/api';

// MIDDLEWARE
router.use(require('../middleware').before);

// CONTROLLERS
var HomeController = require('../controllers/home.controller');
var UserController = require('../controllers/user.controller');

// ROUTES
router.get(BASE_URL + '/', HomeController.index);
router.get(BASE_URL + '/users/:username', UserController.getUser);

module.exports = router;