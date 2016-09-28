'use strict';

function accountController() {
	var $ctrl = this;
	$ctrl.showAccountSection = ($ctrl.collateralAccountList.length) ? true
			: false;
}

accountController.$inject = [];

var config = {
	bindings : {
		collateralAccountList : '<'
	},
	templateUrl : 'loandetails/collateralinfo/account/account.html',
	controller : accountController
};

module.exports = angular.module('loandetails').component('account', config);