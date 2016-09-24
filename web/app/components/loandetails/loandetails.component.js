'use strict';
var loandetailsController = function() {
	//this.message = 'Test Message';
};

var componentConfig = {
	// isolated scope binding
    bindings: {
        loanInfo: '<'
    },
	templateUrl: 'loandetails/loandetails.html',
	controller: loandetailsController
};

module.exports = angular.module('loandetails')
.component('loanDetails', componentConfig);
