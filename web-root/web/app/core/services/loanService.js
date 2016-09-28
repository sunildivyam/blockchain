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
		var REQUEST_URL = {
			getUsesOfLoanProceeds : baseApiUrl + '/getUsesOfLoanProceeds',
			getCurrentRate : baseApiUrl + '/getCurrentRate',
			getCollateralAccountList : baseApiUrl + '/getCollateralAccountList',
			getAccountSecurities : baseApiUrl + '/getAccountSecurities'
		};

		function getUsesOfLoanProceeds() {
			return $http.get(REQUEST_URL.getUsesOfLoanProceeds);
		}
		
		function getCurrentRate(){
			return $http.get(REQUEST_URL.getCurrentRate);
		}
		
		function getCollateralAccountList() {
			return	$http.get(REQUEST_URL.getCollateralAccountList);			
		}

		function getAccountSecurities(){
			return $http.get(REQUEST_URL.getAccountSecurities);
		}
		
		return {
			getUsesOfLoanProceeds: getUsesOfLoanProceeds,
			getCurrentRate : getCurrentRate,
			getCollateralAccountList : getCollateralAccountList,
			getAccountSecurities : getAccountSecurities
		};
	}
]);