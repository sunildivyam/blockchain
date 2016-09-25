'use strict';
var appheaderController = function() {
	this.menuItems = [
		{
			name: 'LoanDetails',
			title: 'New Loan'
		},
		{
			name: 'LoanListing',
			title: 'Loan Listing'
		}
	];

	this.loginInfo = {
		userId: 'guest',
		userName: 'Guest',
		logoutLink: 'logout'
	};
};

var componentConfig = {
	// isolated scope binding
    bindings: {
        menuItems: '<',
        loginInfo: '<'
    },
	templateUrl: 'sblocapp/appheader/appheader.html',
	controller: appheaderController
};

module.exports = angular.module('sblocapp').component('appHeader', componentConfig);
