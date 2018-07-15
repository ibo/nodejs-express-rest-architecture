var app  = require('./modules/api/app');
var port = app.settings.config.server.port;

var server = app.listen(port, function() {
    console.log('Server is listening on port: %s', server.address().port);
});