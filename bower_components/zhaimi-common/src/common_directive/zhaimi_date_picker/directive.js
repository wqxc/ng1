(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name zhaimi.common.directive:zhaimiDatePicker
     * @description
     * # zhaimiDatePicker
     */

    angular.module('zhaimi.common.directive')
        .directive('zhaimiDatePicker', zhaimiDatePicker);

    function zhaimiDatePicker() {
        var zhaimiDatePicker = {
            templateUrl: 'common_directive/zhaimi_date_picker/directive.html',
            restrict: 'EA',
            scope: {
                dateFormat: '@?zhaimiDatePicker',
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
        return zhaimiDatePicker;
    }

    /** @ngInject */
    function zhaimiDatePickerCtrl($scope, zhaimiDate) {
        $scope.formatModel = function(value) {
            if (arguments.length) {
                $scope.model = zhaimiDate.formatDate(value);
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
            });
        }
    }
})();