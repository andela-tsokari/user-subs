var app = require('./config/app-config');
var config = require('./config/api-config');

app
  .listen(config.port, function () {
    console.log('User-Subscriptions Gateway-API Listening on Port: ' + config.port);
  });
