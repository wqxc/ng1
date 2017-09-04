(function() {
    'use strict';

    describe('Directive: zhaimiDatetimePicker', zhaimiDatetimePickerTest);

    function zhaimiDatetimePickerTest() {

        beforeEach(module('zhaimi.common.directive'));

        var element;
        var scope;

        beforeEach(inject(function($rootScope) {
            scope = $rootScope.$new();
        }));

        it('should have class "zhaimi-datetime-picker-view"', inject(function($compile) {
            element = angular.element('<div zhaimi-datetime-picker model="vm.datetime"></div>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element.children().hasClass('zhaimi-datetime-picker-view')).toBe(true);
        }));
    }
})();