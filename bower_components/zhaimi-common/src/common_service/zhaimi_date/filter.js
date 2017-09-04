(function() {
    'use strict';

    /**
     * @ngdoc filter
     * @name zhaimi.common.service.filter:zmDate
     * @description
     * # zmDate
     */

    angular.module('zhaimi.common.service')
        .filter('zmDate', zmDate)
        .filter('zmDateTime', zmDateTime);

    function zmDate(zhaimiDate) {

        return zmDateFilter;

        function zmDateFilter(input) {
            return zhaimiDate.formatDate(input);
        }
    }

    function zmDateTime(zhaimiDate) {

        return zmDateTimeFilter;

        function zmDateTimeFilter(input) {
            return zhaimiDate.formatDateTime(input);
        }
    }

})();
