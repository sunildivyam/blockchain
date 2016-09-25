'use strict';
require('angular-cookies');
require('angular-animate');
require('angular-sanitize');
require('angular-touch');

angular.module("templates", []);
require('../templates/templates.js');

require('./core.module');

module.exports = angular.module('core');