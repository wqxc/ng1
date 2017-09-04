export function routerConfig ($stateProvider, $urlRouterProvider, $futureStateProvider) {
  'ngInject';
  'use strict';
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('main.renqi', {
      url: '/renqi',
      templateUrl: 'app/RenQi/renqi.html',
      controller: 'RenQiController',
      controllerAs: 'vm'
    })
    .state('main.danmu', {
      url: '/danmu',
      templateUrl: 'app/DanMu/danmu.html',
      controller: 'DanMUController',
      controllerAs: 'vm'
    })
    .state('main.dingyue', {
      url: '/dingyue',
      templateUrl: 'app/DingYue/dingyue.html',
      controller: 'DingYueController',
      controllerAs: 'vm'
    })
    .state('main.liwu', {
      url: '/liwu',
      templateUrl: 'app/LiWu/liwu.html',
      controller: 'LiWuController',
      controllerAs: 'vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });


    $urlRouterProvider.otherwise('/main/renqi');

}
