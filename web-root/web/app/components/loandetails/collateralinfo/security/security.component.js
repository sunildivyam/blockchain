'use strict';

function securityController(loanService) {

	var $ctrl = this;
	$ctrl.showLoanFormSection = false;
	$ctrl.collateralAccountDetails = loanService.getAccountSecurities();

}

securityController.$inject = [ 'loanService' ];

var config = {
	bindings : {
		collateralAccountList : '<'
	},
	templateUrl : 'loandetails/collateralinfo/security/security.html',
	controller : securityController
};

module.exports = angular.module('loandetails').component('security', config);
