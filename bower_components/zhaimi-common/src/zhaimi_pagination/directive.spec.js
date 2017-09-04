(function() {
  'use strict';

  describe('Directive: zhaimiPagination', zhaimiPaginationTest);

  function zhaimiPaginationTest() {
    beforeEach(module('zhaimi.common.zhaimiPagination'));

    var element;
    var scope;
    var compile;
    var $q;
    var perPage = 10;
    var itemCount = 29;

    beforeEach(inject(function($rootScope, _$q_, $compile) {
      $q = _$q_;
      compile = $compile;
      scope = $rootScope.$new();
      scope.collection = [];
      scope.collection.restangularCollection = true;
      scope.collection.$pagination = {page: 1, itemCount: itemCount, perPage: perPage};
      scope.collection.getList = function() {
        var promise = $q.when(scope.collection);
        promise.$object = [];
        return promise;
      };
    }));

    // test attrs
    shouldComplain('<div zhaimi-pagination></div>', 'collection must be supplied');

    shouldComplain('<div zhaimi-pagination collection="[]"></div>',
      'if no service supplied, collection must be a restangularCollection');

    shouldComplain('<div zhaimi-pagination="[]" collection="[]">', 'service must be a restangularCollection');

    it('should be wrapped by class "zhaimi-pagination-view" 1', inject(function() {
      element = compileHtml('<div zhaimi-pagination collection="collection"></div>');
      scope.$digest();
      expect(!!element.find('.zhaimi-pagination-view')).toBe(true);
    }));

    it('should be wrapped by class zhaimi-pagination-view" 2', inject(function() {
      element = compileHtml('<div zhaimi-pagination="collection" collection="[]"></div>');
      scope.$digest();
      expect(!!element.find('.zhaimi-pagination-view')).toBe(true);
    }));

    describe('test function', function() {
      // test function
      var vm;
      var pagination;

      beforeEach(inject(function() {
        scope.collection.getList = getList;
        element = compileHtml('<div zhaimi-pagination collection="collection" per-page="' + perPage + '"></div>');
        scope.$digest();
        vm = element.controller('zhaimiPagination');
        pagination = vm.collection.$pagination;

        function getList(query) {
          var page = query.page || 1;
          var perPage = query.perPage || perPage;
          var skip = (page - 1) * perPage;
          var res = [];
          for (var i = skip; i < Math.min(skip + perPage, itemCount); i++) {
            res.push(i + 1);
          }
          res.$query = query;
          res.$pagination = {
            currentPage: page,
            perPage: perPage,
            itemCount: itemCount,
          };
          res.getList = getList;
          var promise = $q.when(res);
          promise.$object = [];
          promise.then(function(res) {
            angular.extend(promise.$object, res);
            return res;
          });
          return promise;
        }
      }));

      it('should have 10 values of [1 ... 8, 9, 10] in page 1', inject(function() {
        assertPage({page: 1, perPage: perPage}, pagination);
      }));

      it('should changed to page 2 by click', inject(function() {
        var pageBtns = element.find('ul').children('li').children('a');
        // two pages and 4 arrowBtns << < > >>
        expect(pageBtns.length).toBe(4 + 3);
        // click page 2
        compile(pageBtns[1 + 2])(scope).triggerHandler('click');
        assertPage({page: 2, perPage: perPage}, vm.collection.$pagination);
      }));

      it('should changed to page 3 by assign', inject(function() {
        // click page 2
        scope.collection.$pagination.currentPage = 3;
        scope.$digest();
        assertPage({page: 3, perPage: perPage}, vm.collection.$pagination);
      }));

      function assertPage(query, $pagination) {
        var skip = (query.page - 1) * query.perPage;
        expect($pagination.currentPage).toBe(query.page);
        expect(Number($pagination.perPage)).toBe(query.perPage);
        var expectedLenght = (skip + query.perPage) > itemCount ? (itemCount - skip) : query.perPage;
        expect(vm.collection.length).toBe(expectedLenght);
        angular.forEach(vm.collection, function(value, index) {
          expect(value).toBe(skip + index + 1);
        });
      }
    });

    function compileHtml(elementStr) {
      var element = angular.element(elementStr);
      return compile(element)(scope);
    }

    function shouldComplain(elementStr, errorMessage) {
      it('should compain: ' + errorMessage, inject(function() {
        expect(function() {
          compileHtml(elementStr);
          scope.$digest();
        }).toThrow(new Error(errorMessage));
      }));
    }
  }

})();
