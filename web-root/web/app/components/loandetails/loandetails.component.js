'use strict';
var loandetailsController = function() {
	var $ctrl = this;
    $ctrl.closeOtherAccordian = true;
    $ctrl.openLoanInfoSection = true;
    $ctrl.openCollateralInfoSection = false;

    $ctrl.expandCollateralInfo = function() {
        $ctrl.openCollateralInfoSection = !$ctrl.openCollateralInfoSection;
    };

    //TODO: Add through life cycle hook
    $ctrl.usesOfLoanProceeds=[];
    /*$ctrl.init = function() {
        loanService.getUsesOfLoanProceeds().then(function(reasonData) {
            $ctrl.loanReasons = reasonData['loan-reason'];
        });

    };*/

};

loandetailsController.$inject = ['loanService'];

var componentConfig = {
    // isolated scope binding
    bindings: {
        loanInfo: '<'
    },
    templateUrl: 'loandetails/loandetails.html',
    controller: loandetailsController,
    $canActivate: ['$nextInstruction', '$prevInstruction', 'userService', '$router', function($nextInstruction, $prevInstruction, userService, $router) {
        console.log('LOANDETAILS: $canActivate', $nextInstruction, $prevInstruction);
        if (userService.isAnonymous() === true) {
            $router.navigate(['Login']);
            return false;
        } else {
            return true;
        }
    }]
};

module.exports = angular.module('loandetails')
.component('loanDetails', componentConfig);
