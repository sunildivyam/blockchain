'use strict';
angular.module('sblocapp')
.config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
    // Enables html5Mode Urls
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

    $httpProvider.interceptors.push('requestInterceptor');
}])
.value('$routerRootComponent', 'sblocApp');