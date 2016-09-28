'use strict';

var collateralInfoController = function(loanService) {

	var $ctrl = this;
	
    //TODO: Life hooks
	$ctrl.collateralAccountList = loanService.getCollateralAccountList;
	/*$ctrl.init = function() {
        $ctrl.collateralAccountList = loanDetailService.getCollateralAccountList;
    };
    $ctrl.init();*/
};

collateralInfoController.$inject = ['loanService'];

var collateralInfoConfig = {
    bindings: {
        loanReasons: '='
    },
    templateUrl: 'loandetails/collateralinfo/collateralinfo.html',
    controller: collateralInfoController
};

angular.module('loandetails').component('collateralInfo', collateralInfoConfig);
