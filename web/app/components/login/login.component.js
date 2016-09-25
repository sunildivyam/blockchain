'use strict';
var loginController = function() {
    this.$routerOnActivate = function(next) {
        console.log('Login: $routerOnActivate', this, next);
    };
};

var componentConfig = {
    // isolated scope binding
    bindings: {
        loanInfo: '<'
    },
    templateUrl: 'login/login.html',
    controller: loginController,
    $canActivate: ['$nextInstruction', '$prevInstruction', 'userService', function($nextInstruction, $prevInstruction, userService) {
        console.log('Login: $canActivate', $nextInstruction, $prevInstruction);
        return userService.isAnonymous();
    }]
};

module.exports = angular.module('login')
.component('login', componentConfig);
