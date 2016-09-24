'use strict';
angular.module('core', [
	'ngCookies',
	'ngAnimate',
	'ngSanitize',
	'ngTouch',
	'ngComponentRouter',
	'ui.bootstrap',
	'templates',

	// Core Services, filters etc.
	require('./domain').name,
	require('./services').name,

	// components
	require('../components/sblocapp').name,
	require('../components/loandetails').name,
	require('../components/loanListing').name
	//require('../components/login').name
]);

