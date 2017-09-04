(function() {
    'use strict';

    describe('Service: zhaimiDate', zhaimiDateTest);

    function zhaimiDateTest() {

        // load the service's module
        beforeEach(module('zhaimi.common.service'));

        // instantiate service
        var zhaimiDate;
        beforeEach(inject(function(_zhaimiDate_) {
            zhaimiDate = _zhaimiDate_;
        }));

        it('should return the YYYY-MM-DD format date', function() {
            expect(zhaimiDate.formatDate('2015-11-16 16:11:19.0')).toBe('2015-11-16');
        });

        it('should return the YYYY-MM-DD HH:mm:ss format date', function() {
            expect(zhaimiDate.formatDateTime('2015-11-16 16:11:19.0'))
                .toBe('2015-11-16 16:11:19');
        });
    }
})();
