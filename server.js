var app = require('./config/app-config');
var port = require('./config/api-config')['port'];

app
  .listen(port, function () {
    console.log('User-Subscriptions Gateway-API Listening on Port: ' + port);
  });
