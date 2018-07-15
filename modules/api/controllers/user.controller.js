var BaseController = require('./base.controller');
var UserModel = require('../models/user.model');

class UserController extends BaseController {

    getUser(req, res) {

        UserModel.getUser(req.params.username)
        .then(function(response) {
            res.json(response);
        })
        .catch(function(err) {
            res.status(500).json({ err: true });
        });

    }

};

module.exports = new UserController();