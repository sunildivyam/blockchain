'use strict';

var collateralInfoController = function() {

};

collateralInfoController.$inject = [];

var collateralInfoConfig = {
    bindings: {
        loanReasons: '='
    },
    templateUrl: 'loandetails/collateralinfo/collateralinfo.html',
    controller: collateralInfoController
};

angular.module('loandetails').component('collateralInfo', collateralInfoConfig);
