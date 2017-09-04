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

  angular.module('zhaimi.common.zhaimiPagination')
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
