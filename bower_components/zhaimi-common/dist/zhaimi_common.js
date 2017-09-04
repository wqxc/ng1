(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name zhaimiCommon
   * @description
   * # zhaimiCommon
   *
   * Main module of the application.
   */

  angular
    .module('zhaimi.common', [
      'zhaimi.common.core',
      'zhaimi.common.zhaimiPagination',
      'zhaimi.common.directive',
      'zhaimi.common.service',
    ]);

  angular
    .module('zhaimi.common.core', [
      'zhaimi.common.zhaimiRest',
    ]);

  angular
    .module('zhaimi.common.directive', [
      'ui.bootstrap',
      'zhaimi.common.service',
      'common_directive/zhaimi_date_picker/directive.html',
      'common_directive/zhaimi_datetime_picker/directive.html',
    ]);

  angular
    .module('zhaimi.common.service', [
      'angularMoment',
    ]);

})();
(function(module) {
try {
  module = angular.module('zhaimi_pagination/directive.html');
} catch (e) {
  module = angular.module('zhaimi_pagination/directive.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('zhaimi_pagination/directive.html',
    '<div class="zhaimi-pagination-view form-inline"><span uib-pagination="" first-text="&laquo;" previous-text="&lsaquo;" next-text="&rsaquo;" last-text="&raquo;" boundary-links="true" max-size="5" ng-model="vm.collection.$pagination.currentPage" items-per-page="vm.collection.$pagination.perPage" total-items="vm.collection.$pagination.itemCount"></span><form class="input-group" novalidate="" name="jumpForm"><input class="form-control" ng-max="vm.collection.$pagination.pageCount" min="1" step="1" ng-model="vm.pageToGo" placeholder="跳转到…（共{{vm.collection.$pagination.pageCount}}页）" type="number" required="" input-validation="positiveInteger"> <span class="input-group-btn"><button class="btn btn-primary" ng-click="vm.collection.$pagination.currentPage = vm.pageToGo" type="button" ng-disabled="jumpForm.$invalid"><i class="fa fa-share"></i></button></span></form></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('common_directive/zhaimi_date_picker/directive.html');
} catch (e) {
  module = angular.module('common_directive/zhaimi_date_picker/directive.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common_directive/zhaimi_date_picker/directive.html',
    '<input uib-datepicker-popup="{{dateFormat || \'yyyy-MM-dd\'}}" placeholder="{{placeholder}}" ng-model="formatModel" ng-model-options="{getterSetter: true}" is-open="isOpen" type="text" class="form-control zhaimi-date-picker-view" ng-click="$event.preventDefault();isOpen = true;" ng-required="required" current-text="今天" clear-text="清空" close-text="选择" min-date="minDate" max-date="maxDate">');
}]);
})();

(function(module) {
try {
  module = angular.module('common_directive/zhaimi_datetime_picker/directive.html');
} catch (e) {
  module = angular.module('common_directive/zhaimi_datetime_picker/directive.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common_directive/zhaimi_datetime_picker/directive.html',
    '<input datetime-picker="yyyy-MM-dd HH:mm:ss" placeholder="{{placeholder}}" class="form-control zhaimi-datetime-picker-view" ng-model="model" is-open="isOpen" type="text" ng-click="$event.preventDefault();isOpen = true;" ng-required="required" today-text="今天" clear-text="清空" time-text="时间" date-text="日期" now-text="现在" close-text="选择" min-date="minDate" max-date="maxDate">');
}]);
})();

(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, ".zhaimi-pagination-view {\n" +
"  display: inline-block; }\n" +
"  .zhaimi-pagination-view .pagination {\n" +
"    display: inline-table;\n" +
"    margin: 0; }\n" +
"  .zhaimi-pagination-view .input-group {\n" +
"    margin-left: -2px;\n" +
"    vertical-align: top; }\n" +
"    .zhaimi-pagination-view .input-group .form-control {\n" +
"      height: 28px;\n" +
"      padding: 3px 9px;\n" +
"      width: 100%; }\n" +
"  .zhaimi-pagination-view .input-group-btn button {\n" +
"    height: 28px;\n" +
"    padding: 3px 9px;\n" +
"    width: 34px; }"));

(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name zhaimi.common.directive:zhaimiPagination
   * @description
   * # zhaimiPagination
   *   Collection: the result model.
   *   Service: a zhaimiRest service extended from restangularCollection to get collection of data.
   *   In zhaimiRest, a service is a collection and a collection can represent a service.
   *   So collection can represent service, too.
   */

  zhaimiPaginationCtrl.$inject = ["$scope"];
  angular.module('zhaimi.common.zhaimiPagination', [
      'ui.bootstrap',
      'zhaimi_pagination/directive.html',
      'zhaimi.common.zhaimiRest',
      'zhaimi.common.directive',
    ])
    .directive('zhaimiPagination', zhaimiPagination);

  function zhaimiPagination() {
    var zhaimiPagination = {
      templateUrl: 'zhaimi_pagination/directive.html',
      restrict: 'EA',
      scope: {
        service: '=?zhaimiPagination',
        collection: '=',
        perPage: '=',
      },
      controller: zhaimiPaginationCtrl,
      controllerAs: 'vm',
      bindToController: true,
      link: linkFunc,
    };
    return zhaimiPagination;

    function linkFunc(scope) {
      scope.vm.activate();
    }
  }

  /* @ngInject */
  function zhaimiPaginationCtrl($scope) {
    var vm = this;
    vm.pageChanged = pageChanged;
    vm.activate = activate;

    function activate() {
      // if no service, collection is service
      if (!vm.collection) {
        throw new Error('collection must be supplied');
      }
      var serviceNotRestangularCollection = 'service must be a restangularCollection';
      if (!vm.service) {
        vm.service = vm.collection;
        serviceNotRestangularCollection = 'if no service supplied, collection must be a restangularCollection';
      }
      if (!vm.service.restangularCollection) {
        throw new Error(serviceNotRestangularCollection);
      }
      var defaultPagination = {page: 1, perPage: vm.perPage || 10};

      // If collection is a restangularCollection
      if (vm.collection.restangularCollection) {
        // Then replace initial collection with a new collection to prevent modifying service
        vm.service.getList(defaultPagination)
          .then(function(collection) {
            vm.collection = collection;
            watchPageChange();
          });
      } else {
        // Else call pageChanged directly;
        vm.collection.$pagination = angular.extend(defaultPagination, vm.collection.$pagination || {});
        vm.collection.$query = vm.collection.$query || {};
        pageChanged().then(watchPageChange);
      }
    }

    function pageChanged() {
      var params = angular.copy(vm.collection.$query);
      params.page = vm.collection.$pagination.currentPage;
      params.perPage = vm.collection.$pagination.perPage;
      var gotCollection = vm.service.getList(params);
      vm.collection.length = 0;
      vm.collection = angular.extend(gotCollection.$object, vm.collection);
      return gotCollection;
    }

    function watchPageChange() {
      $scope.$watch('vm.collection.$pagination.currentPage', function(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
          pageChanged();
        }
      }, true);
    }
  }
})();

(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name zhaimiCommon.zhaimiRest
   * @description
   * # zhaimiRest
   * Factory in the zhaimiCommon.
   */
  zhaimiRestFactory.$inject = ["Restangular", "$q"];
  angular
    .module('zhaimi.common.zhaimiRest', ['restangular'])
    .factory('zhaimiRest', zhaimiRestFactory);

  function zhaimiRestFactory(Restangular, $q) {
    var extendFuncs = [];
    var zhaimiRest = Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.addResponseInterceptor(listNormalizingInterceptor);
      RestangularConfigurer.addResponseInterceptor(returnDataInterceptor);
      RestangularConfigurer.setOnElemRestangularized(addGlobalMethods);
    });
    zhaimiRest.extendPromise = extendPromise;
    zhaimiRest.extendPromise(add$loading);
    /* test-code */
    zhaimiRest._listNormalizingInterceptor = listNormalizingInterceptor;
    /* end-test-code */
    return zhaimiRest;

    function extendPromiseOptions(extension, options) {
      var defaultOptions = {
        type: 'interceptor',
        promiseChain: false,
      };
      options = options || {};
      if (!options.type && angular.isObject(extension) && !angular.isArray(extension)) {
        options.type = 'members';
      }
      return angular.extend(defaultOptions, options);
    }

    function extendPromise(extension, options) {
      options = extendPromiseOptions(extension, options);
      var extendFunc = null;
      var members = {};
      // TODO
      switch (options.type) {
        case 'interceptor': {
          if (!angular.isFunction(extension)) {
            throw new Error('An interceptor must be a function');
          }
          extendFunc = extension;
          break;
        }
        case 'members': {
          if (!angular.isObject(extension) || angular.isArray(extension)) {
            throw new Error('A members\'s map must be an object');
          }
          members = extension;
          break;
        }
        case 'function': {
          if (angular.isFunction(extension)) {
            members[extension.name] = extension;
          } else if (angular.isArray(extension)) {
            angular.forEach(extension, function(func) {
              members[func.name] = func;
            });
          } else if (angular.isObject(extension)) {
            members = extension;
          } else {
            throw new Error('A function type extension must be a function (or map or array of functions)');
          }
          if (options.promiseChain) {
            angular.forEach(members, function(member, name) {
              members[name] = promiseChainify(member);
            });
          }
          break;
        }
      }

      extendFuncs.push(extendFunc ? extendFunc : function(promise) {
        return angular.extend(promise, members);
      });

      return zhaimiRest.setRestangularizePromiseInterceptor(extendPromiseInterceptor);
    }

    function promiseChainify(funcInChain) {
      return function() {
        var originPromise = this;
        var resultPromise = funcInChain.apply(originPromise, arguments);
        resultPromise.$object = originPromise.$object;
        return resultPromise;
      };
    }

    function extendPromiseInterceptor(promise) {
      var originalThen = promise.then;
      promise.then = function() {
        var resultPromise = originalThen.apply(this, arguments);
        return extendPromiseInterceptor(resultPromise);
      };
      angular.forEach(extendFuncs, function(extendFunc) {
        promise = extendFunc(promise);
      });
      return promise;
    }

    function addGlobalMethods(element, isCollection, route, restangular) {
      if (!isCollection) {
        return element;
      }
      element.restangularOne = element.one;
      angular.extend(element, {
        create: create,
        one: one,
        remove: removeFromCollection,
        add: addIntoCollection,
        extendModel: extendModel,
        extendCollection: extendCollection,
      });

      return element;

      function extendModel(extension) {
        var func = angular.isFunction(extension) ? extension : function(item) {
          return angular.extend(item, extension);
        };
        restangular.extendModel(element.route, func);
        return this;
      }

      function extendCollection(extension) {
        var func = angular.isFunction(extension) ? extension : function(collection) {
          return angular.extend(collection, extension);
        };
        restangular.extendCollection(element.route, func);
        func(element);
        return this;
      }
      // Create a new empty element in the collection with fields from obj,
      // which can be later .save()'d via a POST request.
      function create(obj) {
        return restangular.restangularizeElement(
          this.parentResource, obj || {}, this.route);
      }

      function one(type, id) {
        if (arguments.length === 1) {
          // Handle the case of SomeResource.one('id').
          id = type;
          return parentPath(this.parentResource).one(this.route, id);
        }
        // Otherwise, delegate to Restangular.one.
        return this.restangularOne.apply(this, arguments);

        function parentPath(resource) {
          if (!resource) {
            return restangular;
          }
          return parentPath(resource.parentResource).one(resource.route, resource.id);
        }
      }

      function removeFromCollection(element) {
        if (!element) {
          return extendPromiseInterceptor($q.reject({data: '无法删除空对象'}));
        }
        // use id to remove an element;
        var id = element.id || element;
        var collection = this;
        collection.$loading = true;
        // create an element and call its remove method
        return collection.create({id: id})
          .remove()
          .then(function(data) {
            angular.forEach(collection, function(element, index) {
              if (element.id === id) {
                collection.splice(index, 1);
              }
            });
            return data;
          }).finally(function() {
            collection.$loading = false;
          });
      }

      function addIntoCollection(element) {
        if (!element) {
          return extendPromiseInterceptor($q.reject({data: '无法创建空对象'}));
        }
        var collection = this;
        collection.$loading = true;
        var restangularizedElement = element.restangularized ? element : collection.create(element);
        return restangularizedElement
          .save()
          .then(function(data) {
            collection.push(restangularizedElement);
            return data;
          })
          .finally(function() {
            collection.$loading = false;
          });
      }
    }
  }

  function listNormalizingInterceptor(data, operation, what, url, res, defer) {
    try {
      if (operation === 'getList' && !angular.isArray(data)) {
        var items = data.items;
        var pagination = data.pagination;

        if (items == null) {
          for (var key in data) {
            if (angular.isArray(data[key])) {
              if (items == null) {
                items = data[key];
              } else {
                throw new Error('There are multiple arrays! I\'m confused...');
              }
            }
          }
          if (items == null) {
            throw new Error('Missing items array!');
          }
        }

        if (pagination == null) {
          // Add legacy pagination metadata handling here:
          pagination = {
            itemCount: data.count,
            currentPage: data.currentPage,
            pageCount: data.pageCount,
            perPage: data.perPage,
          };
        }
        if (res.config.params) {
          pagination.currentPage = pagination.currentPage || res.config.params.page;
          pagination.perPage = pagination.perPage || res.config.params.perPage;
        }
        pagination.currentPage = pagination.currentPage || 1;

        if (pagination.itemCount == null) {
          throw new Error('Missing itemCount field in pagination!');
        }
        if (!pagination.perPage) {
          throw new Error('Missing perPage field in pagination!');
        }

        if (!pagination.pageCount) {
          pagination.pageCount =
            Math.ceil(pagination.itemCount / pagination.perPage);
        }

        data = items;
        data.$pagination = pagination;
        data.$query = res.config.params;
      }
      return data;
    } catch (err) {
      return defer.reject(err);
    }
  }

  function returnDataInterceptor(data, operation) {
    // Should return created, updated or deleted element,
    // but backend devs have no time ...
    switch (operation) {
      case 'post':
      case 'patch':
      case 'remove': {
        if (!angular.isObject(data)) return null;
        break;
      }
    }
    return data;
  }

  function add$loading(promise) {
    if (promise.$object) {
      Object.defineProperty(promise.$object, '$loading', {
        configurable: true,
        enumerable: false,
        value: true,
      });
      promise.finally(function() {
        if (promise.$object) {
          delete promise.$object.$loading;
        }
      });
    }
    return promise;
  }

})();

(function() {
  'use strict';

/**
* @ngdoc directive
* @name zhaimi.common.directive:commonDirective
* @description
* # inputValidation
*   provide some validation function, based on the ngModelController's $validators work flow
*/

  angular.module('zhaimi.common.directive')
    .directive('inputValidation', inputValidation);

  function inputValidation() {
    function getValidateFunc(validateType, ctrl) {
      //inject ngModelController for validators
      var validateFunc = {
        'integer': integerValidate,
        'positiveInteger': positiveIntegerValidate,
        'orderId': isOrderId,
        'money': isMoney,
      };

      var positiveIntegerRegExp = /^\+?[1-9][0-9]*$/;
      var unNegativeIntegerRegExp = /^\+?[1-9][0-9]*$|0/;
      var moneyRegExp = /^[0-9]+(.[0-9]{1,2})?$/;

      return validateFunc[validateType];

      function integerValidate(modelValue, viewValue) {
        if (angular.isUndefined(modelValue) || modelValue === null) {
          //don't do the required check
          return true;
        }
        return unNegativeIntegerRegExp.test(viewValue);
      }

      function positiveIntegerValidate(modelValue, viewValue) {
        if (angular.isUndefined(modelValue) || modelValue === null) {
          //don't do the required check
          return true;
        }
        return positiveIntegerRegExp.test(viewValue);
      }

      function isOrderId(modelValue, viewValue) {
        //orderId cannot start with 0
        return positiveIntegerRegExp.test(viewValue) && viewValue.length === 18;
      }

      function moneyCheck(viewValue) {
        return moneyRegExp.test(viewValue);
      }

      function isMoney(modelValue, viewValue) {
        if (!viewValue) {
          return false;
        }
        var valid = moneyCheck(viewValue);
        if (!valid) {
          var pointerIndex = viewValue.indexOf('.');
          if (pointerIndex < 0) {
            return valid;
          } else {
            var pointerLength = viewValue.length - pointerIndex - 1;
            if (pointerLength > 2) {
              //let the input have no more than 2 decimal places
              viewValue = viewValue.slice(0, pointerIndex + 3)
              ctrl.$setViewValue(viewValue, 'input');
              ctrl.$render();
              // modelValue = modelValue.toFixed(2);
              return moneyCheck(viewValue);
            }
          }
        }
        return valid;
      }
    }

    var inputValidation = {
      restrict: 'A',
      require: 'ngModel',
      link: linkFunc,
    };
    return inputValidation;

    function linkFunc(scope, elem, attr, ctrl) {
      var validateType = attr['inputValidation'];
      var validator = getValidateFunc(validateType, ctrl);
      ctrl.$validators[validateType] = validator;
    }
  }
})();
(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name zhaimi.common.directive:zhaimiDatePicker
     * @description
     * # zhaimiDatePicker
     */

    zhaimiDatePickerCtrl.$inject = ["$scope", "zhaimiDate"];
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
        zhaimiDatePickerCtrl.$inject = ["$scope", "zhaimiDate"];
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
(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name zhaimi.common.service.zhaimiDate
     * @description
     * # zhaimiDate
     * Factory in the zhaimi.common.service.
     */
    zhaimiDate.$inject = ["moment"];
    angular
        .module('zhaimi.common.service')
        .factory('zhaimiDate', zhaimiDate);

    function zhaimiDate(moment) {
        // Public APIs here
        // Ordered by alphabetical order
        // 按字母序排序
        var exports = {
            formatDate: formatDate,
            formatDateTime: formatDateTime,
            now: now,
        };

        return exports;

        function formatDate(date) {
            if (date) {
                return moment(date).format('YYYY-MM-DD');
            }
        }

        function formatDateTime(dateTime) {
            if (dateTime) {
                return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
            }
        }

        function now() {
          return moment(new Date()).format('YYYY-MM-DD');
        }
    }
})();

(function() {
    'use strict';

    /**
     * @ngdoc filter
     * @name zhaimi.common.service.filter:zmDate
     * @description
     * # zmDate
     */

    zmDate.$inject = ["zhaimiDate"];
    zmDateTime.$inject = ["zhaimiDate"];
    angular.module('zhaimi.common.service')
        .filter('zmDate', zmDate)
        .filter('zmDateTime', zmDateTime);

    function zmDate(zhaimiDate) {

        return zmDateFilter;

        function zmDateFilter(input) {
            return zhaimiDate.formatDate(input);
        }
    }

    function zmDateTime(zhaimiDate) {

        return zmDateTimeFilter;

        function zmDateTimeFilter(input) {
            return zhaimiDate.formatDateTime(input);
        }
    }

})();
