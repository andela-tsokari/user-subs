module.exports = {

  development: {
    users: 'http://localhost:3000/api/v1/',

    subscriptions: 'http://localhost:4000/api/v1/'

  },

  production: {
    users: 'http://tams-users-api.herokuapp.com/api/v1/',

    subscriptions: 'http://subscriptions-api.herokuapp.com/api/v1/'

  },

  port: process.env.PORT || 5000
};
