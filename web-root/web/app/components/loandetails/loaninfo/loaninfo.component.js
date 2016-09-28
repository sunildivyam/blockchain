"use strict";

var loanInfoController = function(loanService) {

	var $ctrl = this;
	$ctrl.enableRateSection = function() {
		loanService.getCurrentRate().then(function(rateInfo) {
			$ctrl.currentRate = rateInfo;
			$ctrl.showRateSection = !$ctrl.showRateSection;
		});
	};

	$ctrl.onLoanInfoSave = function(form) {
		if (form.$valid) {
			//TODO: call service API
			$ctrl.openCollateralAccordian();
			/*loanService.getCollateralAccountList().then(function() {
				$ctrl.openCollateralAccordian();
			});*/
		}
	};

	//TODO: life hooks
	$ctrl.showRateSection = false;
	/*$ctrl.init = function() {
	    $ctrl.showRateSection = false;
	};
	$ctrl.init();*/

};

loanInfoController.$inject = [ 'loanService' ];

var loanInfoConfig = {
	bindings : {
		usesOfLoanProceeds : '=',
		openCollateralAccordian : '&'
	},
	templateUrl : 'loandetails/loaninfo/loaninfo.html',
	controller : loanInfoController
};

angular.module('loandetails').component('loanInfo', loanInfoConfig);
