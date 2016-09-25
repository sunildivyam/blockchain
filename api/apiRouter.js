'use strict';
var express = require('express');
var User = require('./models/User');
var jwt = require('jsonwebtoken');
var config = require('../config');

var router = express.Router();
var app = express();

app.set('superSecret', config.secret);

// define the API route
router.get('/', function(req, res) {
	res.send('API is at /api/* ');
});

// route to return all users (GET http://localhost:8080/api/users)
router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/authenticate', function(req, res) {
  // find the user
  User.findOne({
    userName: req.body.userName
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var tokenExpiry = 1440;
        console.log(user);
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: tokenExpiry // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
			success: true,
			message: 'Authenticated Successfully',
			token: token,
			tokenExpiry: tokenExpiry,
			userName: user.userName,
			firstName: user.firstName,
			lastName: user.lastName,
			emailId: user.emailId
        });
      }

    }

  });
});

router.post('/logout', function(req, res) {
	res.json({
		success: true,
		message: 'logged out successfully'
	});
});

////************* Delete it after use
router.get('/setup', function(req, res) {
  // create a sample user
  var nick = new User({
    userName: 'sunil',
    password: 'Default123#',
    emailId: 'sunil@gmail.com',
    firstName: 'Sunil',
    lastName: 'Kumar',
    roles: ['admin', 'fa']
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

////*************

module.exports = router;
