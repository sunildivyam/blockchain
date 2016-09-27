'use strict';

angular.module('core.domain')
.factory('CollateralAccount', [function() {
	var CollateralAccount = function(data) {
		if (data instanceof Object) {
			this.id = data.id;
			this.name = data.name;
		}
	};

	CollateralAccount.prototype = {

	};

	return CollateralAccount;
}]);