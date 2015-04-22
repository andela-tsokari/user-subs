module.exports = (function() {
  var express = require('express'),
      bodyParser = require('body-parser');
  
  var app = express();
  
  var router = express.Router();

  var routes = require('./../app/routes/user-subs.route');
  
  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use('/api/v1/', router);
  
  routes(router);

  return app;

})();
