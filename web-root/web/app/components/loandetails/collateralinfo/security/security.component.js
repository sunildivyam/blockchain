'use strict';

(function() {
	var securityController = function() {

	};

	securityController.$inject = [];

	var config = {
		bindings:{},
		templateUrl: 'loandetails/collateralinfo/security/security.html',
		controller: securityController
	};

	angular.module('loandetails').component('security', config);

}());
