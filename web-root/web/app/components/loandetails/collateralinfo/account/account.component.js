'use strict';

function accountController() {

}

var config = {
	bindings: {},
	templateUrl: 'loandetails/collateralinfo/account/account.html',
	controller: accountController
};

module.exports = angular.module('loandetails').component('account', config);