'use strict';
var express = require('express');
var router = express.Router();

// define the API route
router.get('/api1', function(req, res) {
	res.send('api1');
});
// define the API route
router.get('/api2', function(req, res) {
	res.send('API 2');
});

module.exports = router;
