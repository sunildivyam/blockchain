'use strict';

function securityController(loanService) {

	var $ctrl = this;
	$ctrl.showLoanFormSection = false;

	function calculateCollateralAmount(securityDetails) {
		securityDetails.forEach(function(security) {
			$ctrl.collateralValue += Number
					.parseInt(security[security.length - 1]);
		});
	}

	$ctrl.collateralValue = 0;
	$ctrl.init = function() {
		$ctrl.showLoanFormSection = false;
		//$ctrl.accountDetails = $ctrl.securityDetails;
		$ctrl.loanAmount = '$' + loanService.loanAmount;
		calculateCollateralAmount($ctrl.securityDetails.data);
	};

	$ctrl.init();

}

securityController.$inject = [ 'loanService' ];

var config = {
	bindings : {
		securityDetails : '='
	},
	templateUrl : 'loandetails/collateralinfo/security/security.html',
	controller : securityController
};

module.exports = angular.module('loandetails').component('security', config);
