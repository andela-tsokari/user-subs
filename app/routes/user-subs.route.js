var userSubs = require('./../controllers/user-subs.controller');

module.exports = function(router) {
  router
    .route('/signup')
    .post(userSubs.signup);

  router
    .route('/login')
    .post(userSubs.login);

  router
    .route('/:username/logout')
    .get(userSubs.logout);

  router
    .route('/:username/subscriptions')
    .get(userSubs.getUserSubscriptions);

  router
    .route('/:username/subscriptions/posts')
    .get(userSubs.getUserPostSubscriptions);

  router
    .route('/:username/subscriptions/tags')
    .get(userSubs.getUserTagSubscriptions);

  router
    .route('/:username/new-subs')
    .post(userSubs.createNewSubscription);

  router
    .route('/:username/subscription/:_id')
    .get(userSubs.getUserSubscription)
    .put(userSubs.editUserSubscription)
    .delete(userSubs.deleteUserSubscription);

};