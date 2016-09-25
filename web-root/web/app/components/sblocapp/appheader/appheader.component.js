'use strict';
var appheaderController = function(userService) {
	//var $ctrl = this;

	this.logout = function(event) {
		event.preventDefault();
		userService.logout().then(function() {
			window.location.pathname = '/login';
		}, function() {

		});
	};

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
	var currentUser = userService.getLoggedInUser();
	this.loginInfo = {
		userId: currentUser && currentUser.userName || 'Guest',
		userName: currentUser && currentUser.userName || 'Guest',
		logoutLink: 'logout'
	};
};

appheaderController.$inject = ['userService'];
var componentConfig = {
	// isolated scope binding
    bindings: {
        menuItems: '<',
        loginInfo: '<',
        $router: '<'
    },
	templateUrl: 'sblocapp/appheader/appheader.html',
	controller: appheaderController
};

module.exports = angular.module('sblocapp').component('appHeader', componentConfig);
