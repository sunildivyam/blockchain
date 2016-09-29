'use strict';

(function() {

    angular.module('core.domain')
        .factory('CollateralAccount', [function() {
            var CollateralAccount = function(data) {
                if (data instanceof Object) {
                    this.id = data.id;
                    this.securityName = data.securityName;
                    this.cusip = data.cusip;
                    this.quantity = data.quantity;
                    this.price = data.price;
                    this.mv = data.mv;
                    this.collateralValue = data.collateralValue;
                }
            };

            CollateralAccount.prototype = {

            };

            return CollateralAccount;
        }]);

})();
