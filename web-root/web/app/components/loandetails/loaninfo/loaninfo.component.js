"use strict";

var loanInfoController = function() {

};

loanInfoController.$inject = [''];

var loanInfoConfig = {
    bindings: {
    },
    templateUrl: 'loandetails/loaninfo/loaninfo.html',
    controller: loanInfoController
};

angular.module('loandetails').component('loanInfo', loanInfoConfig);
