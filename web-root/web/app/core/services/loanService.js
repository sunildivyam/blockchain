'use strict';
/*
*	loanService
*	Description
*	loanService fetches and performs on the Loan Data.
*/

angular.module('core.services')
.service('loanService', ['$q', '$http', 'EntityMapper',
	function($q, $http, User, EntityMapper) {
		var baseApiUrl = '/api';
		var urls = {
			getUsesOfLoanProceeds: baseApiUrl + '/getusesofloanproceeds'
		};


		function getUsesOfLoanProceeds() {
		}

		return {

		};
	}
]);
