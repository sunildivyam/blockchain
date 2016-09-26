'use strict';
var appheaderController = function(userService, $router) {
	//var $ctrl = this;
	console.log("ROUTER APPHEADER", $router);
	this.logout = function(event) {
		event.preventDefault();
		userService.logout().then(function() {
			$router.navigate(['Login']);
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

appheaderController.$inject = ['userService', '$router'];
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
