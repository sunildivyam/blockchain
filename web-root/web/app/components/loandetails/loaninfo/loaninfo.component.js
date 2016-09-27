"use strict";

var loanInfoController = function(loanService) {
	var $ctrl = this;

	this.loanUses = [];

	loanService.getUsesOfLoanProceeds().then(function(data) {
		$ctrl.loanUses = data || [];
	}, function() {
		$ctrl.loanUses = [];
	});
};

loanInfoController.$inject = ['loanService'];

var loanInfoConfig = {
    bindings: {
    },
    templateUrl: 'loandetails/loaninfo/loaninfo.html',
    controller: loanInfoController
};

angular.module('loandetails').component('loanInfo', loanInfoConfig);
