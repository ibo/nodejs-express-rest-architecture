var axios  = require('axios');
var config = require('../config/service');

class BaseService {

    constructor() {
        this.setAxios();
        this.setConfig();
    };

    setAxios() {
        this.axios = axios;
        this.axios.defaults.baseURL = config.github.domain.protocol + config.github.domain.baseUrl;
        this.endpoint = config.github.endpoint;
    };

    setConfig() {
        this.config = config;
    };
    
};

module.exports = BaseService;