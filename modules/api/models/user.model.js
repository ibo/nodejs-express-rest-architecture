var GithubService = require('../services/github/github.service');
var UserMapper = require('./mapper/user.mapper');

class UserModel {
    
    getUser(username) {

        return GithubService.getUser(username)
        .then(function(response) {
            return UserMapper.user(response);
        })
        .catch(function(err) {
            return err;
        });

    };

};

module.exports = new UserModel();