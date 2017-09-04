(function() {
  'use strict';

  describe('Controller: DemoCtrl', DemoCtrlTest);

  function DemoCtrlTest() {

    // load the controller's module
    beforeEach(module('zhaimiRestDemo'));

    var vm;
    var scope;
    var backend;
    var handlers;
    var prefix = '/api/demos';
    var $log;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $injector, _$log_) {
      backend = $injector.get('$httpBackend');
      configResponses();
      backend.expectGET(prefix + '?page=1&perPage=10');
      backend.expectGET(prefix + '/1');
      $log = _$log_;
      scope = $rootScope.$new();
      vm = $controller('DemoCtrl', {
        $scope: scope,
      });
      backend.flush();
    }));

    afterEach(function() {
      backend.verifyNoOutstandingExpectation();
      backend.verifyNoOutstandingRequest();
    });

    function configResponses() {
      var demos = [];
      for (var i = 0; i < 27; i++) {
        demos[i] = {id: i + 1};
      }
      handlers = {
        getList: backend.whenGET(prefix + '?page=1&perPage=10').respond({
          data: demos.slice(0, 10),
          pagination: {
            itemCount: 27,
          },
        }),
        one: backend.whenGET(prefix + '/1').respond({id: 1}),
        createAndReturn: backend.whenPOST(prefix, {}).respond({id: 9527}),
        create: backend.whenPOST(prefix).respond('创建成功'),
        update: backend.whenPATCH(prefix + '/1').respond(),
        removeFromCollection1: backend.whenDELETE(prefix + '/1').respond(),
        removeFromCollection2: backend.whenDELETE(prefix + '/2').respond(),
        subdemos: backend.whenGET(prefix + '/subdemos/1').respond(),
        oneDemoOneDemo2OneDemo3: backend.whenGET(prefix + '/1/demos2/1/demos3/1').respond(),
        allDemosOneDemo2OneDemo3: backend.whenGET(prefix + '/demos2/1/demos3/1').respond(),
      };
    }

    it('should ...', function() {
      expect(!!vm).toBe(true);
      expect(vm.demo.id).toBe(1);
      expect(vm.demos.length).toBe(10);
      expect(vm.demo.isModel()).toBe(true);
      expect(vm.demos.isCollection()).toBe(true);
      expect(vm.demos.restangularCollection).toBe(true);
    });

    describe('should update ', function() {
      var updated;
      beforeEach(function() {
        backend.expectPATCH(prefix + '/1', {id: 1, name: 'demo'});
        vm.demo.name = 'demo';
        updated = vm.update();
      });
      it('succeeded', function() {
        backend.flush();
        expect($log.info.logs[0]).toEqual(['修改成功']);
      });
      it('failed', function() {
        updated.then(function() {
          expect('Should not be successful').toEqual('');
        }, function(res) {
          expect(res.status).toEqual(400);
          expect(res.data).toEqual('修改失败: 来打我呀');
        });

        handlers.update.respond(400, '修改失败: 来打我呀');
        backend.flush();
        // This is zhaimiRest error log
        expect($log.error.logs[0][0].data).toEqual('修改失败: 来打我呀');
        // This is our extendPromise error, use warn to identify from above one;
        expect($log.warn.logs).toEqual([['修改失败: 来打我呀']]);
      });
    });

    it('should create', function() {
      backend.expectPOST(prefix, {});
      vm.demo = vm.create().$object;
      backend.flush();
      scope.digest;
      expect(vm.demo.restangularized).toBe(true);
      expect(vm.demo.id).toBe(9527);
    });

    it('should reject removeFromCollection when element is blank', function() {
      vm.removeFromCollection();
      scope.$digest();
      // This is our extendPromise error, use warn to identify from above one;
      expect($log.warn.logs).toEqual([['无法删除空对象']]);
    });

    it('should reject addIntoCollection when element is blank', function() {
      vm.addIntoCollection();
      scope.$digest();
      // This is our extendPromise error, use warn to identify from above one;
      expect($log.warn.logs).toEqual([['无法创建空对象']]);
    });

    describe('should add {value: "addIntoCollection"} into collection ', function() {
      var addIntoCollectionDemo;
      beforeEach(function() {
        addIntoCollectionDemo = {value: 'addIntoCollection'};
        backend.expectPOST(prefix, angular.copy(addIntoCollectionDemo));
        expect(vm.demos.length).toBe(10);
      });

      it('with normal object', function() {
        vm.addIntoCollection(addIntoCollectionDemo);
      });

      it('with restangularized object', function() {
        vm.addIntoCollection(vm.Demos.create(addIntoCollectionDemo));
      });

      afterEach(function() {
        backend.flush();
        expect(vm.demos.length).toBe(11);
        expect(vm.demos[10].value).toBe('addIntoCollection');
      });
    });

    it('should remove {id: 1} from collection ', function() {
      backend.expectDELETE(prefix + '/1');
      backend.expectDELETE(prefix + '/2');
      expect(vm.demos[0].id).toBe(1);
      vm.removeFromCollection(vm.demo);
      vm.removeFromCollection(2);
      backend.flush();
      expect(vm.demos.length).toBe(8);
      expect(vm.demos[0].id).toBe(3);
    });

    it('should get demos/1/subdemos/1', function() {
      backend.expectGET(prefix + '/subdemos/1');
      vm.Demos.one('subdemos', 1).get();
      backend.flush();
    });

    it('should get demos/1/demos2/1/demos3/1', function() {
      backend.expectGET(prefix + '/1/demos2/1/demos3/1');
      var Demos3 = vm.Demos.one(1).all('demos2').one(1).all('demos3');
      Demos3.one(1).get();
      backend.flush();
    });

    it('should get demos/demos2/1/demos3/1', function() {
      backend.expectGET(prefix + '/demos2/1/demos3/1');
      var Demos3 = vm.Demos.all('demos2').one(1).all('demos3');
      Demos3.one(1).get();
      backend.flush();
    });
  }
})();
