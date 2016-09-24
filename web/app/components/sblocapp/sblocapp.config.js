'use strict';
angular.module('sblocapp')
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}])
.value('$routerRootComponent', 'sblocApp');