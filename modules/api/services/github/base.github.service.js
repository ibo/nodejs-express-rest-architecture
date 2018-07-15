var BaseService = require('../base.service');

class BaseGitHubService extends BaseService {
    constructor() {
        super();
        this.axios.defaults.baseURL = this.config.github.domain.protocol + this.config.github.domain.baseUrl;
        this.endpoint = this.config.github.endpoint;
    };

    setAxiosConfig() {
        this.axios.defaults.baseURL = config.github.domain.protocol + config.github.domain.baseUrl;
        this.endpoint = config.github.endpoint;
    }
}

module.exports = BaseGitHubService;