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

              request
                .get({
                  url: api.subscriptions + body.user + '/subscriptions',
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

            }

            else {
              res
                .send({
                  error: 'You are not authorised to view other users\' subscriptions'
                });

            }

          }

        });

    }     

  },

  getUserPostSubscriptions: function(req, res) {
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

              request
                .get({
                  url: api.subscriptions + body.user + '/subscriptions/posts',
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

            }

            else {
              res
                .json({
                  error: 'You are not authorised to view other user\'s subscriptions'
                });

            }

          }

        });

    }     

  },

  getUserTagSubscriptions: function(req, res) {
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

              request
                .get({
                  url: api.subscriptions + body.user + '/subscriptions/tags',
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

            }

            else {
              res
                .json({
                  error: 'You are not authorised to view other user\'s subscriptions'
                });

            }

          }

        });

    }     

  },

  getUserSubscription: function(req, res) {
    var user = req.params.username;

    var id = req.params._id;

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

              request
                .get({
                  url: api.subscriptions + body.user + '/subscription/' + id,
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

            }

            else {
              res
                .json({
                  error: 'You are not authorised to view other user\'s subscriptions'
                });

            }

          }

        });

    }     

  },

  createNewSubscription: function(req, res) {
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

              request
                .post({
                  url: api.subscriptions + body.user + '/new-subs',
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

            }

            else {
              res
                .json({
                  error: 'You are not authorised to create a subscription here'
                });

            }

          }

        });

    }     

  },

  editUserSubscription: function(req, res) {
    var user = req.params.username;
    var id = req.params._id;

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

            console.log(body.auth_status);

            if ((body.user === user) && (body.auth_status === true)) {

              request
                .put({
                  url: api.subscriptions + body.user + '/subscription/' + id,
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

            }

            else {
              res
                .json({
                  error: 'You are not authorised to edit other user\'s subscription(s)'
                });

            }

          }

        });

    }     

  },

  deleteUserSubscription: function(req, res) {
    var user = req.params.username;
    var id = req.params._id;

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

              request
                .del({
                  url: api.subscriptions + body.user + '/subscription/' + id,
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

            }

            else {
              res
                .json({
                  error: 'You are not authorised to delete another user\'s subscription'
                });

            }

          }

        });

    }     

  }

};