(function() {
    'use strict';
    /**
     * @ngdoc overview
     * @name zhaimiCommon
     * @description
     * # zhaimiCommon
     *
     * Main module definition of this lib.
      */

    angular.module('zhaimi.common', [
        'zhaimi.common.core',
        'zhaimi.common.zhaimiPagination',
        'zhaimi.common.directive',
        'zhaimi.common.service',
    ]);

    angular.module('zhaimi.common.directive', [
        'ui.bootstrap',
        'zhaimi.common.service',
        'common_directive/zhaimi_date_picker/directive.html',
        'common_directive/zhaimi_datetime_picker/directive.html',
    ]);

    angular.module('zhaimi.common.service', [
        'angularMoment',
    ]);

    angular.module('zhaimi.common.core', [
        'zhaimi.common.zhaimiRest',
    ]);

    angular.module('zhaimi.common.zhaimiPagination', [
        'ui.bootstrap',
        'zhaimi_pagination/directive.html',
        'zhaimi.common.zhaimiRest',
        'zhaimi.common.directive',
    ]);

})();