"use strict";

var loanInfoController = function(loanService) {

};

loanInfoController.$inject = ['loanService'];

var loanInfoConfig = {
    bindings: {
    },
    templateUrl: 'loandetails/loaninfo/loaninfo.html',
    controller: loanInfoController
};

angular.module('loandetails').component('loanInfo', loanInfoConfig);
