'use strict';
/*
*   requestInterceptor
*   Description
*   requestInterceptor intercepts are responses and error responses and
*   redirects to respective Error Pages
*/

angular.module('core.services')
.factory('requestInterceptor', ['$q', '$rootScope', '$injector',
    function($q, $rootScope, $injector) {
        var AUTH_ERROR = [401, 403];    // Authentication Errors

        function request(config) {
            var userService = $injector.get('userService');

            if (!userService.isAnonymous()) {
                config.headers['x-access-token'] = 'Bearer ' + userService.getToken;
            }

            return config;
        }

        function requestError(rejection) {
            return rejection;
        }

        function response(response) {
            return response;
        }

        function responseError(rejection) {
            redirectOnError(rejection);
            return $q.reject(rejection);
        }

        function redirectOnError(res) {
            var isAuthError = false;

            AUTH_ERROR.filter(function(error) {
                if (error === res.status) {
                    isAuthError = true;
                    return;
                }
            });

            $rootScope.errorState = {
                'status': res.status,
                'statusText': res.statusText
            };

            if(isAuthError === true) {
                //$rootRouter.navigate(['error']);
            } else {
                //$rootRouter.navigate(['login']);
            }
        }

        return {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        };
    }
]);
