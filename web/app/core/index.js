'use strict';
require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
require('angular-touch');

angular.module("templates", []);
require('../templates/templates.js');

angular.module('core', [
	'ngCookies',
	'ngAnimate',
	'ngSanitize',
	'ngTouch',
	'ngComponentRouter',
	'ui.bootstrap',
	'templates',
	// Core Services, filters etc.

	// components
	require('../components/sblocapp').name,
	require('../components/loandetails').name
	//require('../components/loanListing').name,
	//require('../components/login').name
]);

module.exports = angular.module('core');