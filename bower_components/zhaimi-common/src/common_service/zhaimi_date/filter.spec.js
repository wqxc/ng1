(function() {
    'use strict';

    describe('Filter: zmDate', zmDateTest);

    function zmDateTest() {

        // load the filter's module
        beforeEach(module('zhaimi.common.service'));

        // initialize a new instance of the filter before each test
        var zmDate;
        var zmDateTime;
        beforeEach(inject(function($filter) {
            zmDate = $filter('zmDate');
            zmDateTime = $filter('zmDateTime');
        }));

        it('should return the YYYY-MM-DD format date', function() {
            expect(zmDate('2015-11-16 16:11:19.0')).toBe('2015-11-16');
        });

        it('should return the YYYY-MM-DD HH:mm:ss format date', function() {
            expect(zmDateTime('2015-11-16 16:11:19.0')).toBe('2015-11-16 16:11:19');
        });

    }
})();
