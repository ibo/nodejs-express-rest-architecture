var BaseGitHubService = require('./base.github.service');

class GitHubService extends BaseGitHubService {
    
    getUser(username) {
        var axios = this.axios;
        var logger = this.logger;
        var requestUrl = this.endpoint.GET_USER(username);

        return new Promise(function(resolve,reject) {
            axios.get(requestUrl)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
        });
    }

}

module.exports = new GitHubService();