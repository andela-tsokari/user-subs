var request = require('request');

var api = require('./api-config')[process.env.NODE_ENV];

module.exports = function (req, res, next) {
  var user = req.params.username;

  var hWT = req.get('Authorization');

  //check that Authorization is defined
  if (typeof(hWT) === 'undefined') {
    res
      .json({
        error: 'You need to add your access_token as an Authorization Header'
      });

  }

  //to be used in cases where Authorization access_token is present
  else {
    request
      .get({
        url: api.users + '/auth',
        method: 'GET',
        headers: {
          Authorization: hWT
        }
      },

      function(error, response, body) {
        if(error) {
          res
            .json({
              error: JSON.parse(error)
            });
        }
        else if (body) {

          var body = JSON.parse(body);

          if ((body.user === user) && (body.auth_status === true)) {
            next();
          }

          else {
            res
              .json({
                error: 'you cannot act as another user'
              });
          }

        }

      });
  }

};
