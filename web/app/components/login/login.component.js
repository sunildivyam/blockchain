'use strict';
var loginController = function() {
	//this.message = 'Test Message';
};

var componentConfig = {
	// isolated scope binding
    bindings: {
        loanInfo: '<'
    },
	templateUrl: 'login/login.html',
	controller: loginController
};

module.exports = angular.module('login')
.component('login', componentConfig);
