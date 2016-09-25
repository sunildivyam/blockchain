'use strict';

angular.module('core.domain')
.factory('LoginInfo', [function () {
	var LoginInfo = function(data) {
		if (data instanceof Object) {
			this.userName = data.userName;
			this.password = data.password;
			this.confirmPassword = data.confirmPassword;
		}
	};

	LoginInfo.prototype = {

	};
	return LoginInfo;
}]);
