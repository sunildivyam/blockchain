'use strict';
/*
*	loanService
*	Description
*	loanService fetches and performs on the Loan Data.
*/

angular.module('core.services')
.service('loanService', ['$q', '$http',
	function($q, $http) {
		var baseApiUrl = '/api';
		var urls = {
			getUsesOfLoanProceeds: baseApiUrl + '/getusesofloanproceeds'
		};


		function getUsesOfLoanProceeds() {
			var defferedObj = $q;

			$http.get(urls.getUsesOfLoanProceeds).then(function(response) {
				defferedObj.resolve(response);
			}, function(rejection) {
				defferedObj.reject(rejection);
			});
		}

		return {
			getUsesOfLoanProceeds: getUsesOfLoanProceeds
		};
	}
]);
