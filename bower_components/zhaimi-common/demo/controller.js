(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name zhaimiRestDemo.controller:DemoCtrl
   * @description
   * # DemoCtrl
   * Controller of the zhaimiRestDemo
   */
  angular
    .module('zhaimiRestDemo')
    .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl(Demos) {
    var vm = this;
    vm.getDemo = getDemo;
    vm.create = create;
    vm.getList = getList;
    vm.getListDeprecated = getListDeprecated;
    vm.update = update;
    vm.getListWithLoadingFlag = getListWithLoadingFlag;
    vm.removeFromCollection = removeFromCollection;
    vm.addIntoCollection = addIntoCollection;
    vm.pagination = pagination;

    activate();

    function activate() {
      vm.demo = Demos.create({id: 1});
      vm.demos = Demos;
      vm.Demos = Demos;
      getList({page: 1, perPage: 10});
      getDemo(1);
    }

    function getDemo(id) {
      vm.demo = Demos.one(id).get().$object;
      // equals to
      // DemoService.getDemo(id).then(function(demo) {
      //   vm.demo = demo;
      // })
    }

    function create(demo) {
      return Demos.create(demo).save();
      // equals to
      // return DemoService.createDemo(vm.demo).then(function(res) {
      //   notifyService.success('创建成功');
      // }, function(res) {
      //   errorService.error(res)
      // })
    }

    function getList(query) {
      vm.demos = Demos.getList(query).$object;
      // equals to
      // return DemoService.getDemos(query).then(function(demos) {
      //   vm.demos = demos;
      // })
    }

    function getListDeprecated() {
      vm.demos = Demos.getListDeprecated().getArray('data').$object;
    }
    // equals to
    // return DemoService.getDemosDeprecated().then(function(res) {
    //   vm.demos = res.data;
    // })
    // function getDemosDeprecated() {
    //   return $http.get('demos/deprecated').then(function(res){
    //     return res.data;
    //   });
    // }

    function getListWithLoadingFlag() {
      // with html <div ng-if="vm.demos.$loading">Loading!</div>
      vm.getList();
      // equals to
      // with html <div ng-if="vm.loadingFlag">Loading!</div>
      // vm.loadingFlag = true;
      // getList().then(function() {
      //   vm.loadingFlag = false;
      // });
    }

    function update() {
      // in html <button ng-click="vm.demo.patch(vm.demo).notify('修改成功')"></button>
      return vm.demo.patch(vm.demo).notify('修改成功');
      // equals to
      // with html <button ng-click="vm.updateDemo()"></button>
      // vm.updateDemo = updateDemo;
      // function updateDemo() {
      //   DemoService.updateDemo(vm.demo).then(function() {
      //     notifyService.success('修改成功');
      //   }, function(err) {
      //     errorService.error(err);
      //   })
      // }
    }

    // in html <button ng-click="vm.demos.remove(vm.demo).notify('删除成功')"></button>
    //
    // or
    //
    // with html <button ng-click="vm.removeFromCollection(vm.demo)"></button>
    function removeFromCollection(demo) {
      vm.demos.remove(demo).notify('删除成功');
    }
    // equals to

    // in html <button ng-click="vm.removeDemo()"></button>
    // vm.removeDemo = removeDemo;
    // function removeDemo(demo) {
    //   var demoId = demo.id;
    //   DemoService.$loading =true;
    //   DemoService.removeDemo(demoId).then(function() {
    //     notifyService.success('删除成功');
    //     angular.forEach(vm.demos, function(demo, index) {
    //       if (demo.id === demoId) {
    //         vm.demos.splice(index, 1);
    //       }
    //     });
    //   }, function(err) {
    //     errorService.error(err);
    //   }).finally(function() {
    //     DemoService.$loading =true;
    //   })
    // }

    // in html <button ng-click="vm.demos.add(vm.demo).notify('创建成功')"></button>
    //
    // or
    //
    // with html <button ng-click="vm.addIntoCollection(vm.demo)"></button>
    function addIntoCollection(demo) {
      vm.demos.add(demo).notify('创建成功');
    }
    // equals to

    // in html <button ng-click="vm.addDemo(vm.demo)"></button>
    // vm.addDemo = addDemo;
    // function addDemo(demo) {
    //   DemoService.createDemo(demo).then(function() {
    //     notifyService.success('创建成功');
    //     vm.demos.push(demo);
    //   }, function(err) {
    //     errorService.error(err);
    //   }).
    // }

    function pagination() {
      // with html <div zhaimi-pagination collection="demoCollection" per-page="10"></div>
      vm.demoCollection = Demos;
      // equals to

      // with html
      // <div boundary-links="true" first-text="&laquo;" items-per-page="vm.query.perPage" last-text="&raquo;"
      //   max-size="5" next-text="&rsaquo;" ng-change="vm.pageChanged()" ng-model="vm.currentPage"
      //   uib-pagination previous-text="&lsaquo;" total-items="vm.totalItems">
      // </div>

      // var vm.query = {page: 1, perPage: 10};
      // vm.pageChanged = pageChanged;
      // vm.currentPage = 1;
      // pageChanged();
      //
      // function getList() {
      //   DemoService.getList(vm.query).then(function(data) {
      //     vm.totalItems = data.totalItems;
      //     vm.demos = data.demos;
      //   })
      // }
      //
      // function pageChanged() {
      //   vm.query.page = vm.currentPage;
      //   getList();
      // }
    }

  }
})();
