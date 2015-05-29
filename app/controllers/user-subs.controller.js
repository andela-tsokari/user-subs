var request = require('request');
var api = require('./../../config/api-config')[process.env.NODE_ENV];

module.exports = {
  //successful signup
  signup: function(req, res) {
    request
      .post({
        url: api.users + 'signup',
        method: 'POST',
        form: req.body
      }, function(err, httpres, body) {
        if (err) {
          res
            .error({
              error: error.message
            });
        }
        else {
          // var body = JSON.parse(body);
          res
            .json(JSON.parse(body));
        }
      });

  },

  //successful login
  login: function(req, res) {
    request
      .post({
        url: api.users + 'login',
        method: 'POST',
        form: req.body
      },

      function(error, httpres, body) {
        if(error) {
          res
            .error({
              error: error.message
            });
        }
        res
          .json(JSON.parse(body));
      });

  },

  getUserSubscriptions: function(req, res) {
    request
      .get({
        url: api.subscriptions + req.params.username + '/subscriptions',
        method: 'GET'
      },

      function(error, response, body) {
        if(error) {
          res
            .send({
              error: error
            });

        }

        else {
          res
            .json(JSON.parse(body));

        }
      });

  },

  getUserPostSubscriptions: function(req, res) {
    request
      .get({
        url: api.subscriptions + req.params.username + '/subscriptions/posts',
        method: 'GET'
      },

      function(error, response, body) {
        if(error) {
          res
            .json({
              error: error
            });

        }

        else {
          res
            .json(JSON.parse(body));

        }
      });

  },

  getUserTagSubscriptions: function(req, res) {
    request
      .get({
        url: api.subscriptions + req.params.username + '/subscriptions/tags',
        method: 'GET'
      },

      function(error, response, body) {
        if(error) {
          res
            .json({
              error: error
            });

        }

        else {
          res
            .json(JSON.parse(body));

        }
      });

  },

  getUserSubscription: function(req, res) {
    request
      .get({
        url: api.subscriptions + req.params.username + '/subscription/' + req.params._id,
        method: 'GET'
      },

      function(error, response, body) {
        if(error) {
          res
            .json({
              error: error
            });

        }

        else {
          res
            .json(JSON.parse(body));

        }
      });

  },

  createNewSubscription: function(req, res) {
    request
      .post({
        url: api.subscriptions + req.params.username + '/new-subs',
        method: 'POST',
        form: req.body
      },

      function(error, response, body) {
        if(error) {
          res
            .json({
              error: error
            });

        }

        else {
          res
            .json({
              subscriptions: JSON.parse(body)
            });

        }
      });

  },

  editUserSubscription: function(req, res) {
    request
      .put({
        url: api.subscriptions + req.params.username + '/subscription/' + req.params._id,
        method: 'PUT',
        form: req.body
      },

      function(error, response, body) {
        if(error) {
          res
            .json({
              error: error
            });

        }

        else {
          res
            .json({
              subscriptions: JSON.parse(body)
            });

        }
      });

  },

  deleteUserSubscription: function(req, res) {
    request
      .del({
        url: api.subscriptions + req.params.username + '/subscription/' + req.params._id,
        method: 'DELETE'
      },

      function(error, response, body) {
        if(error) {
          res
            .json({
              error: error
            });

        }

        else {
          res
            .json(JSON.parse(body));

        }
      });

  },

  logout: function(req, res) {
    request
      .get({
        url: api.users + req.params.username + '/logout',
        method: 'GET'
      },

      function(error, response, body) {
        if(error) {
          res
            .json({
              error: error
            });

        }

        else {
          res
            .send(JSON.parse(body));

        }

      });

  }

};
