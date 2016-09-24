'use strict';
var sblocappController = function() {
	//this.message = 'Test Message';
};

var componentConfig = {
	// isolated scope binding
    bindings: {
        message: '<'
    },
	templateUrl: 'sblocapp/sblocapp.html',
	controller: sblocappController,
	$routeConfig: [
		{
			path: '/loandetails',
			name: 'LoanDetails',
			component: 'loanDetails'
		},
		{
			path: '/loanlisting',
			name: 'LoanListing',
			component: 'loanListing'
		}
	]
};

module.exports = angular.module('sblocapp')
.component('sblocApp', componentConfig);
