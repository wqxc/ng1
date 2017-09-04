(function() {
  'use strict';

  describe('Factory: Demos', DemosTest);

  function DemosTest() {

    // load the service's module
    beforeEach(module('zhaimiRestDemo'));

    // instantiate service
    var Demos;
    beforeEach(inject(function(_Demos_) {
      Demos = _Demos_;
    }));

    it('should do something', function() {
      expect(!!Demos).toBe(true);
    });
  }
})();
