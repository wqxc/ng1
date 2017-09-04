(function() {
    'use strict';

    describe('Directive: zhaimiDatePicker', zhaimiDatePickerTest);

    function zhaimiDatePickerTest() {

        beforeEach(module('zhaimi.common.directive'));

        var element;
        var scope;

        beforeEach(inject(function($rootScope) {
            scope = $rootScope.$new();
        }));

        it('should have class "zhaimi-date-picker-view"', inject(function($compile) {
            element = angular.element('<div zhaimi-date-picker model="vm.date"></div>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element.children().hasClass('zhaimi-date-picker-view')).toBe(true);
        }));
    }
})();