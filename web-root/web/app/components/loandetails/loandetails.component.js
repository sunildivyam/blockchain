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
    controller: loandetailsController,
    $canActivate: ['$nextInstruction', '$prevInstruction', 'userService', function($nextInstruction, $prevInstruction, userService) {
        console.log('LOANDETAILS: $canActivate', $nextInstruction, $prevInstruction);
        if (userService.isAnonymous() === true) {
            window.location.pathname = '/login';
            return false;
        } else {
            return true;
        }
    }]
};

module.exports = angular.module('loandetails')
.component('loanDetails', componentConfig);
