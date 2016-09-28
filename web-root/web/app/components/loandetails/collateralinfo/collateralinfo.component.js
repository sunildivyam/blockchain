'use strict';

var collateralInfoController = function(loanService) {

	var $ctrl = this;
	
    //TODO: Life hooks
	$ctrl.collateralAccountList=[];
	$ctrl.init = function() {
		loanService.getCollateralAccountList().then(function(response){
			$ctrl.collateralAccountList = response.data['collateralAccount'];
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
