(function() {
  'use strict';

  describe('Service: zhaimiRest', zhaimiRestTest);

  function zhaimiRestTest() {

    // load the service's module
    beforeEach(module('zhaimi.common.zhaimiRest'));

    // instantiate service
    var zhaimiRest;
    var $q;
    beforeEach(inject(function(_zhaimiRest_, _$q_) {
      zhaimiRest = _zhaimiRest_;
      $q = _$q_;
    }));

    it('should do something', function() {
      expect(!!zhaimiRest).toBe(true);
    });

    describe('extendPromise', function() {
      describe('should add a member: tested for promise', function() {
        it('should works fine with {}', function() {
          zhaimiRest.extendPromise({tested: true});
        });

        it('should works fine with ({}, {type: "members"})', function() {
          zhaimiRest.extendPromise({tested: true}, {type: 'members'});
        });

        afterEach(function() {
          expect(zhaimiRest.all('demos').get(1).tested).toBe(true);
        });
      });

      it('should make function nextChain inherit from restangular\'s promises', function() {
        function nextChain() {
          return $q.when();
        }
        zhaimiRest.extendPromise(nextChain, {type: 'function', promiseChain: true});
        var promise = zhaimiRest.all('demos').get(1);
        expect(promise.$object).toBe(promise.nextChain().$object);
      });

      describe('should add a function: nextChain for promise', function() {
        var randomNum = Math.random();

        function getRandomNum() {
          return randomNum;
        }

        function nextChain() {
          return getRandomNum();
        }

        it('should works fine with a map of functions when type is members', function() {
          zhaimiRest.extendPromise({nextChain: getRandomNum}, {type: 'members'});
        });

        it('should works fine with a map of functions when type is function', function() {
          zhaimiRest.extendPromise({nextChain: getRandomNum}, {type: 'function'});
        });

        it('should works fine with a function of right name when type is function', function() {
          zhaimiRest.extendPromise(nextChain, {type: 'function'});
        });

        it('should works fine with an array of functions of right name when type is function', function() {
          zhaimiRest.extendPromise([nextChain], {type: 'function'});
        });

        afterEach(function() {
          expect(zhaimiRest.all('demos').get(1).nextChain).toBeDefined();
          expect(zhaimiRest.all('demos').get(1).nextChain()).toBe(randomNum);
        });
      });

      describe('should check type', function() {
        itShouldComplain(function() {
          zhaimiRest.extendPromise({}, {type: 'interceptor'});
        }, 'An interceptor must be a function');

        itShouldComplain(function() {
          zhaimiRest.extendPromise([], {type: 'members'});
        }, 'A members\'s map must be an object');

        itShouldComplain(function() {
          zhaimiRest.extendPromise('', {type: 'function'});
        }, 'A function type extension must be a function (or map or array of functions)');
      });
    });

    describe('listNormalizingInterceptor', function() {
      describe('should accept', function() {

        var originQuery;
        var data;
        var items;
        var resultPagination;

        beforeEach(function() {
          items = [];
          for (var i = 0; i < 11; i++) {
            items[i] = {id: i};
          }
          originQuery = {
            currentPage: 1,
            perPage: 10,
          };
          data = {
            items: items,
            pagination: {
              perPage: 10,
              itemCount: 11,
            },
          };
          resultPagination = {
            perPage: 10,
            itemCount: 11,
            currentPage: 1,
            pageCount: 2,
          };
        });

        it('only an array',function() {
          data = items;
          originQuery = undefined;
        });

        it('array with another name',function() {
          data.array = data.items;
          delete data.items;
        });

        it('itemCount in data.pagination and perPage in query',function() {
          delete data.pagination.perPage;
        });

        it('itemCount in data.pagination and currentPage(page) in query',function() {
          resultPagination.currentPage = originQuery.page = 2;
        });

        it('itemCount and perPage in data.pagination and a blank query', function() {
          originQuery = undefined;
        });

        it('count in data and perPage in query', function() {
          data.count = data.pagination.itemCount;
          delete data.pagination;
        });

        it('count and perPage in data', function() {
          data.count = data.pagination.itemCount;
          data.perPage = data.pagination.perPage;
          delete data.pagination;
          originQuery = undefined;
        });

        afterEach(function() {
          var res = {config: {params: originQuery}};
          var collection = zhaimiRest._listNormalizingInterceptor(data, 'getList', '', '', res);
          expect(collection).toEqual(items);
          if (data.pagination) {
            expect(collection.$pagination).toEqual(resultPagination);
          }
        });
      });

      itShouldReject({data: {}}, 'Missing items array!');

      itShouldReject({data: [], list: []}, 'There are multiple arrays! I\'m confused...');

      itShouldReject({data: [], pagination: {}}, 'Missing itemCount field in pagination!');

      itShouldReject({data: [], pagination: {itemCount: 7}}, 'Missing perPage field in pagination!');

      function itShouldReject(data, error) {
        it('should reject for ' + error, function() {
          var defer = $q.defer();
          var res = {config: {}};
          zhaimiRest._listNormalizingInterceptor(data, 'getList', '', '', res, defer);
          defer.promise.catch(function(err) {
            expect(err.message).toBe(1);
          });
        });
      }
    });

    function itShouldComplain(func, error) {
      it('should complain ' + error, function() {
        expect(func).toThrow(new Error(error));
      });
    }
  }
})();
