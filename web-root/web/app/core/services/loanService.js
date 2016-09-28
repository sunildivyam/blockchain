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
			var defferedObj = $q;

			$http.get(REQUEST_URL.getUsesOfLoanProceeds).then(function(response) {
				defferedObj.resolve(response);
			}, function(rejection) {
				defferedObj.reject(rejection);
			});
			return defferedObj.promise;
		}
		
		function getCurrentRate(){
			var defferedObj = $q;

			$http.get(REQUEST_URL.getCurrentRate).then(function(response) {
				defferedObj.resolve(response);
			}, function(rejection) {
				defferedObj.reject(rejection);
			});
			return defferedObj.promise;
		}
		
		function getCollateralAccountList() {
			var defferedObj = $q;

			$http.get(REQUEST_URL.getCollateralAccountList).then(function(response) {
				defferedObj.resolve(response);
			}, function(rejection) {
				defferedObj.reject(rejection);
			});
			return defferedObj.promise;			
		}

		function getAccountSecurities(){
			var defferedObj = $q;

			$http.get(REQUEST_URL.getAccountSecurities).then(function(response) {
				defferedObj.resolve(response);
			}, function(rejection) {
				defferedObj.reject(rejection);
			});
			return defferedObj.promise;			
		}
		
		return {
			getUsesOfLoanProceeds: getUsesOfLoanProceeds,
			getCurrentRate : getCurrentRate,
			getCollateralAccountList : getCollateralAccountList,
			getAccountSecurities : getAccountSecurities
		};
	}
]);