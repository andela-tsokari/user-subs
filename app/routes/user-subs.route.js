var userSubs = require('./../controllers/user-subs.controller');

var auth = require('./../../config/auth');

module.exports = function(router) {
  router
    .route('/signup')
    .post(userSubs.signup);

  router
    .route('/login')
    .post(userSubs.login);

  router
    .route('/:username/logout')
    .get(auth, userSubs.logout);

  router
    .route('/:username/subscriptions')
    .get(auth, userSubs.getUserSubscriptions);

  router
    .route('/:username/subscriptions/posts')
    .get(auth, userSubs.getUserPostSubscriptions);

  router
    .route('/:username/subscriptions/tags')
    .get(auth, userSubs.getUserTagSubscriptions);

  router
    .route('/:username/new-subs')
    .post(auth, userSubs.createNewSubscription);

  router
    .route('/:username/subscription/:_id')
    .get(auth, userSubs.getUserSubscription)
    .put(auth, userSubs.editUserSubscription)
    .delete(auth, userSubs.deleteUserSubscription);

};
