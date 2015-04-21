var app = require('./config/app-config');

app
  .listen(process.env.PORT || 5000, function () {
    console.log('Express App Listening on Port: ' + process.env.PORT || 5000);
  });
