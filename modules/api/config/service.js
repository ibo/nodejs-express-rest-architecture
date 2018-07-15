module.exports = {

    github: {
        domain: {
            protocol: 'https://',
            baseUrl: 'api.github.com'
        },

        endpoint: {
            GET_USER: function(username) { 
                return `/users/:username`.replace(':username',username); 
            }
        }
    }
};