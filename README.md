#User-Subs API Gateway
##About

As part of my training, it was required that we build APIs in the Micro-Service Pattern.
I built two APIs. One to handle user **[Subscriptions (Post and Tag)](#anchor1)**, and another for the **[User Service](#anchor2)**. You can find the Subscriptions Service API [here] and the User Service API [here]. 

---
###[Subscriptions API](id:anchor1)
The [Subscriptions API](https://github.com/andela-tsokari/subscriptions-api) was built using the following tools and frameworks.

1. [ExpressJS](http://expressjs.com) Web Framework for [NodeJS](http://nodejs.org).
2. [Mongoose](http://mongoosejs.com) Object Document Model (ODM) for the No-SQL database, [MongoDB](http://mongodb.com).
3. [MongoLab](http://mongolab.com) for Remote MongoDB hosting.
4. Finally [Heroku](http://heroku.com) for API hosting. The hosted version of the app can be found [here](https://subscriptions-api.herokuapp.com). 

**N.B.:** This API can only accessed using an API client like [POSTMAN](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop) for now. Perhaps someday soon, I will create a client to handle this. For [Firefox Dev Edition](https://www.mozilla.org/en-US/firefox/developer/) users like me, I find that [RESTClient](https://addons.mozilla.org/en-us/firefox/addon/restclient/) and [RestEasy](https://addons.mozilla.org/en-uS/firefox/addon/rest-easy/) can do as good a job.


###[Users-API](id:anchor2)

The [Users API](https://github.com/andela-tsokari/users-api) was built using the following tools and frameworks.

1. [ExpressJS](http://expressjs.com) Web Framework for [NodeJS](http://nodejs.org).
2. [BookshelfJS](http://bookshelfjs.org) Object Relational Mapper (ORM) for [PostgreSQL](http://postgresql.org).
2. Finally [Heroku](http://heroku.com) for API hosting, and remote database storage. The hosted version of the app can be found [here](https://tams-users-api.herokuapp.com).


