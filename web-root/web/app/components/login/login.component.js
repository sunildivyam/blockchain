'use strict';

(function() {

    var loginController = function(LoginInfo, userService, $router) {
        console.log("ROUTER LOGIN: ", $router);
        var $ctrl = this;
        this.loginInfo = new LoginInfo();
        this.isLoginSuccess = false;
        this.loginMessage = '';

        this.$routerOnActivate = function(next) {
            console.log('Login: $routerOnActivate', this, next);
        };

        this.loginSubmit = function() {
            userService.login($ctrl.loginInfo).then(function(response) {
                $ctrl.loginMessage = response.message;
                $ctrl.isLoginSuccess = true;
                $router.navigate(['LoanDetails']);
            }, function(rejection) {
                $ctrl.loginMessage = rejection.message;
                $ctrl.isLoginSuccess = false;
            });
        };
    };
    loginController.$inject = ['LoginInfo', 'userService', '$router'];

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

})();
