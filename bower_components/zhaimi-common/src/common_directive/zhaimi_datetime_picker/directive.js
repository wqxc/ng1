(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name zhaimi.common.directive:zhaimiDatetimePicker
     * @description
     * # zhaimiDatetimePicker
     */

    angular.module('zhaimi.common.directive')
        .directive('zhaimiDatetimePicker', zhaimiDatetimePicker);

    function zhaimiDatetimePicker() {
        var zhaimiDatetimePicker = {
            templateUrl: 'common_directive/zhaimi_datetime_picker/directive.html',
            restrict: 'EA',
            scope: {
                model: '=',
                isOpen: '=?',
                placeholder: '@',
                required: '=?',
                minDate: '=?',
                maxDate: '=?',
                change: '&',
            },
            controller: zhaimiDatePickerCtrl,
            link: zhaimiDatePickerLink,
        };
        return zhaimiDatetimePicker;

        /** @ngInject */
        //firefox cannot convert string like "2016-05-20 13:14:15" by new Date(), which is used by angular-bootstrap.
        //so the below formatter cannot work for this directive or firefox will pop error.
        function zhaimiDatePickerCtrl($scope, zhaimiDate) {
            $scope.formatModel = function(value) {
                if (arguments.length) {
                    $scope.model = zhaimiDate.formatDateTime(value);
                } else {
                    return $scope.model;
                }
            };
        }

        function zhaimiDatePickerLink($scope) {
            if ($scope.change) {
                $scope.$watch(function() {
                    return $scope.model;
                }, function(newVal, oldVal) {
                    if (oldVal !== newVal) {
                        $scope.change();
                    }
                })
            }
        }
    }
})();