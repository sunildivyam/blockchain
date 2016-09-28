'use strict';

var collateralInfoController = function(loanService) {

	var $ctrl = this;
	
    //TODO: Life hooks
	$ctrl.collateralAccountList=[];
	$ctrl.showSecuritySection = function(){
		//TODO
		loanService.getAccountSecurities(loanService.selectedAccountList).then(function(response){
            $ctrl.securityDetails = response.data['securityDetails'];
            $ctrl.enableSecuritySection = true;
    });
    };
    
	$ctrl.init = function() {
		loanService.getCollateralAccountList().then(function(response){
			$ctrl.collateralAccountList = response.data['collateralAccount'];
			$ctrl.enableSecuritySection = false;
			$ctrl.securityDetails = {};
		});
    };
    $ctrl.init();
};

collateralInfoController.$inject = ['loanService'];

var collateralInfoConfig = {
    bindings: {},
    templateUrl: 'loandetails/collateralinfo/collateralinfo.html',
    controller: collateralInfoController
};

angular.module('loandetails').component('collateralInfo', collateralInfoConfig);
