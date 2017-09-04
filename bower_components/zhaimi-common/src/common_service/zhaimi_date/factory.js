(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name zhaimi.common.service.zhaimiDate
     * @description
     * # zhaimiDate
     * Factory in the zhaimi.common.service.
     */
    angular
        .module('zhaimi.common.service')
        .factory('zhaimiDate', zhaimiDate);

    function zhaimiDate(moment) {
        // Public APIs here
        // Ordered by alphabetical order
        // 按字母序排序
        var exports = {
            formatDate: formatDate,
            formatDateTime: formatDateTime,
            now: now,
        };

        return exports;

        function formatDate(date) {
            if (date) {
                return moment(date).format('YYYY-MM-DD');
            }
        }

        function formatDateTime(dateTime) {
            if (dateTime) {
                return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
            }
        }

        function now() {
          return moment(new Date()).format('YYYY-MM-DD');
        }
    }
})();
