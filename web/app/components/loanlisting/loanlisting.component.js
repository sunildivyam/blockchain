'use strict';
var loanlistingController = function() {
	//this.message = 'Test Message';
};

var componentConfig = {
	// isolated scope binding
    bindings: {
        loanInfo: '<'
    },
	templateUrl: 'loanlisting/loanlisting.html',
	controller: loanlistingController
};

module.exports = angular.module('loanlisting')
.component('loanListing', componentConfig);
