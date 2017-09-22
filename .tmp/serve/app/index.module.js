/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _master = __webpack_require__(4);
	
	var _kunHttp = __webpack_require__(5);
	
	var _notifyservice = __webpack_require__(6);
	
	var _dataService = __webpack_require__(7);
	
	var _main = __webpack_require__(8);
	
	var _login = __webpack_require__(9);
	
	var _renqi = __webpack_require__(10);
	
	var _newduty = __webpack_require__(11);
	
	var _danmu = __webpack_require__(12);
	
	var _newdmduty = __webpack_require__(13);
	
	var _dingyue = __webpack_require__(14);
	
	var _liwu = __webpack_require__(15);
	
	var _direstive = __webpack_require__(17);
	
	var _ball = __webpack_require__(16);
	
	angular.module('kun', ['ngAnimate', 'ngResource', 'ngCookies', 'ngMessages', 'ngTouch', 'ui.router', 'ui.bootstrap', 'ngStorage', 'angular-flexslider', 'ct.ui.router.extras', 'toastr', 'cgNotify', 'angular-confirm', 'ngFileUpload', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay', 'com.2fdevs.videogular.plugins.poster', 'localytics.directives']).config(_index2.routerConfig).run(_index3.runBlock).config(_index.config).controller('LoginController', _login.LoginController).controller('MainController', _main.MainController).controller('RenQiController', _renqi.RenQiController).controller('NewDutyController', _newduty.NewDutyController).controller('DanMUController', _danmu.DanMUController).controller('NewDMDutyController', _newdmduty.NewDMDutyController).controller('DingYueController', _dingyue.DingYueController).controller('LiWuController', _liwu.LiWuController).controller('BallController', _ball.BallController).factory('KunHttp', _kunHttp.KunHttp).factory('NotifyService', _notifyservice.NotifyService).factory('dataService', _dataService.dataService).factory('HttpInterceptor', _master.HttpInterceptor).directive('myDirective', _direstive.myDirective); /* global malarkey:false, moment:false */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "$httpProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, $httpProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	  // $cookieStore.put('myFavorite','oatmeal');
	  // // Get cookie
	  // var xCookie = $cookies.get('token');
	  // console.log('这congfig里的cookie',xCookie);
	  // // Removing a cookie
	  // $cookieStore.remove('myFavorite');
	  // $httpProvider.defaults.headers.common = { 'Cookies' : 'xxxxx' };
	
	  // $httpProvider.interceptors.push('Authinterceptor');
	  $httpProvider.interceptors.push('HttpInterceptor');
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$futureStateProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider, $futureStateProvider) {
	  'ngInject';
	  'use strict';
	
	  $stateProvider.state('main', {
	    url: '/main',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'vm'
	  }).state('main.renqi', {
	    url: '/renqi',
	    templateUrl: 'app/RenQi/renqi.html',
	    controller: 'RenQiController',
	    controllerAs: 'vm'
	  }).state('main.danmu', {
	    url: '/danmu',
	    templateUrl: 'app/DanMu/danmu.html',
	    controller: 'DanMUController',
	    controllerAs: 'vm'
	  }).state('main.dingyue', {
	    url: '/dingyue',
	    templateUrl: 'app/DingYue/dingyue.html',
	    controller: 'DingYueController',
	    controllerAs: 'vm'
	  }).state('main.liwu', {
	    url: '/liwu',
	    templateUrl: 'app/LiWu/liwu.html',
	    controller: 'LiWuController',
	    controllerAs: 'vm'
	  }).state('login', {
	    url: '/login',
	    templateUrl: 'app/login/login.html',
	    controller: 'LoginController',
	    controllerAs: 'vm'
	  }).state('main.ball', {
	    url: '/ball',
	    templateUrl: 'app/ball/ball.html',
	    controller: 'BallController',
	    controllerAs: 'vm'
	  });
	
	  $urlRouterProvider.otherwise('/main/renqi');
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$rootScope", "$state", "$log", "$confirmModalDefaults"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($rootScope, $state, $log, $confirmModalDefaults) {
	  'ngInject';
	  'use strict';
	
	  $log.debug('runBlock end');
	
	  //CONFIRM CONFIG
	  $confirmModalDefaults.defaultLabels.title = '确认';
	  $confirmModalDefaults.defaultLabels.ok = '确认';
	  $confirmModalDefaults.defaultLabels.cancel = '取消';
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	HttpInterceptor.$inject = ["$q"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HttpInterceptor = HttpInterceptor;
	function HttpInterceptor($q) {
	  'ngInject';
	
	  var responseInterceptor = {
	    response: responseHandler
	  };
	
	  return responseInterceptor;
	
	  function responseHandler(response) {
	    var data = response.data || {};
	    if (data.hasOwnProperty('success')) {
	      return $q(function (resolve, reject) {
	        var success = data.success;
	        response.data = data.data;
	        if (success === true) {
	          resolve(response);
	        } else {
	          response.status = response.data.code || response.status;
	          reject(response);
	        }
	      });
	    } else {
	      return response;
	    }
	  }
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	KunHttp.$inject = ["$http"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KunHttp = KunHttp;
	function KunHttp($http) {
	  'ngInject';
	
	  var baseUrl = 'http://101.236.46.149:8080/';
	
	  var exports = {
	    'delete': deleteHandler,
	    'get': get,
	    'patch': patch,
	    'post': post,
	    'put': put
	  };
	
	  exports.baseUrl = baseUrl;
	  // Public API here
	  return exports;
	
	  function deleteHandler(url, config) {
	    return $http.delete('' + baseUrl + '' + url + '', config);
	  }
	
	  function get(url, options) {
	    return $http.get('' + baseUrl + '' + url + '', options);
	  }
	
	  function patch(url, data, options) {
	    return $http.patch('' + baseUrl + '' + url + '', data, options);
	  }
	
	  function post(url, data, options) {
	    return $http.post('' + baseUrl + '' + url + '', data, options);
	  }
	
	  function put(url, data, config) {
	    return $http.put('' + baseUrl + '' + url + '', data, config);
	  }
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	NotifyService.$inject = ["notify"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotifyService = NotifyService;
	function NotifyService(notify) {
	  'ngInject';
	
	  var inspiniaTemplate = 'app/common/views/notify.html';
	
	  function info(msg) {
	    notify({
	      message: msg,
	      classes: 'alert-info',
	      templateUrl: inspiniaTemplate
	    });
	  }
	
	  function success(msg) {
	    notify({
	      message: msg,
	      classes: 'alert-success',
	      templateUrl: inspiniaTemplate
	    });
	  }
	
	  function warning(msg) {
	    notify({
	      message: msg,
	      classes: 'alert-warning',
	      templateUrl: inspiniaTemplate
	    });
	  }
	
	  function danger(msg) {
	    notify({
	      message: msg,
	      classes: 'alert-danger',
	      templateUrl: inspiniaTemplate
	    });
	  }
	
	  function clearAll() {
	    // notify.closeAll();
	  }
	
	  var exports = {
	    info: info,
	    success: success,
	    warning: warning,
	    danger: danger,
	    clearAll: clearAll
	  };
	  return exports;
	}
	
	// })();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	dataService.$inject = ["KunHttp", "$cookieStore"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dataService = dataService;
	function dataService(KunHttp, $cookieStore) {
	  'ngInject';
	  'use strict';
	
	  // 登录接口
	
	  function startLogin(query) {
	    return KunHttp.post('login', query);
	  }
	  // 人气
	  // 获取人气列表的接口
	  function getRenQi() {
	    var token = $cookieStore.get('token');
	    console.log("dataService", token);
	    return KunHttp.get('population/tasks', { headers: { "Cookies": token } });
	  }
	  // 新增人气任务的接口
	  function addRenQi(query) {
	    var token = $cookieStore.get('token');
	    console.log("dataService", token);
	    return KunHttp.post('population/add_task', query, { headers: { "Cookies": token } });
	  }
	  //删除人气接口
	
	  function deleteRenQi(query) {
	    var token = $cookieStore.get('token');
	    console.log("dataService", token);
	    return KunHttp.post('population/delete_task', query, { headers: { "Cookies": token } });
	  }
	  // 弹幕
	  // 获取弹幕列表
	  function getDanMu() {
	    var token = $cookieStore.get('token');
	    console.log("dataService", token);
	    return KunHttp.get('', { headers: { "Cookies": token } });
	  }
	  // 新增弹幕任务
	  function addDanMu() {
	    var token = $cookieStore.get('token');
	    console.log("dataService", token);
	    return KunHttp.get('', { headers: { "Cookies": token } });
	  }
	  // 删除弹幕
	  function deleteDanMu(query) {
	    var token = $cookieStore.get('token');
	    console.log("dataService", token);
	    return KunHttp.get('', query, { headers: { "Cookies": token } });
	  }
	  var exports = {
	    //登录
	    startLogin: startLogin,
	    getRenQi: getRenQi,
	    addRenQi: addRenQi,
	    deleteRenQi: deleteRenQi,
	
	    getDanMu: getDanMu,
	    addDanMu: addDanMu,
	    deleteDanMu: deleteDanMu
	  };
	
	  // Public API here
	  return exports;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MainController = MainController;
	function MainController() {
	    'ngInject';
	    'use strict';
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	LoginController.$inject = ["$cookieStore", "dataService", "$state"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginController = LoginController;
	function LoginController($cookieStore, dataService, $state) {
	  'ngInject';
	  'use strict';
	  // $cookieStore.put('myFavorite','oatmeal');
	  // // Get cookie
	  // var favoriteCookie = $cookieStore.get('myFavorite');
	  // // Removing a cookie
	  // $cookieStore.remove('myFavorite');
	
	  var vm = this;
	  vm.data = {};
	  vm.login = login;
	  function login(user) {
	    dataService.startLogin(user).then(function (res) {
	      $cookieStore.put('token', res.data.data);
	      var token = $cookieStore.get('token');
	      console.log("tokken", token);
	      $state.go('main.renqi');
	    }, function (res) {
	      console.log("error", res);
	    });
	  }
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	RenQiController.$inject = ["$uibModal", "dataService", "$cookieStore", "$state", "NotifyService", "$timeout"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RenQiController = RenQiController;
	function RenQiController($uibModal, dataService, $cookieStore, $state, NotifyService, $timeout) {
	    'ngInject';
	    'use strict';
	
	    // 新增一个人气任务
	
	    function addNewDuty() {
	        var modalInstance = $uibModal.open({
	            templateUrl: 'app/RenQi/NewDuty/newduty.html',
	            controller: 'NewDutyController',
	            controllerAs: 'vm',
	            size: 'lg'
	        });
	        modalInstance.result.then(function () {
	            NotifyService.danger("新增成功");
	        }, function () {
	            NotifyService.danger("新增失败");
	            return;
	        });
	    }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	NewDutyController.$inject = ["NotifyService", "$uibModalInstance", "dataService"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NewDutyController = NewDutyController;
	function NewDutyController(NotifyService, $uibModalInstance, dataService) {
	    'ngInject';
	    'use strict';
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	DanMUController.$inject = ["$cookieStore", "$uibModal"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DanMUController = DanMUController;
	function DanMUController($cookieStore, $uibModal) {
	  'ngInject';
	  'use strict';
	
	  var vm = this;
	  vm.danmuList = [];
	  vm.addNewDanMu = addNewDanMu;
	  vm.delDanMuDuty = delDanMuDuty;
	  function reloadList() {
	    $timeout(function () {
	      getDanMuList();
	      // console.log("这是延时执行的函数");
	    }, 5000);
	  }
	  // 获取弹幕任务列表
	  function getDanMuList() {
	    dataService.getDanMu().then(function (res) {
	      if (res.data.error_code == 1) {
	        $cookieStore.remove('token');
	        $state.go('login');
	        NotifyService.danger("尚未登录/登录过期，请重新登录");
	      }
	      if (res.data.error_code == 0) {
	        vm.danmuList = res.data.data;
	      }
	    }, function (res) {
	      NotifyService.danger("获取数据失败");
	      return;
	    });
	  }
	  // 新增弹幕任务
	  function addNewDanMu() {
	    var modalInstance = $uibModal.open({
	      templateUrl: 'app/DanMu/NewDMDuty/newdmduty.html',
	      controller: 'NewDMDutyController',
	      controllerAs: 'vm',
	      size: 'lg'
	    });
	    modalInstance.result.then(function () {
	      reloadList();
	    }, function () {
	      NotifyService.danger("新增失败");
	      return;
	    });
	  }
	
	  // 删除任务
	  function delDanMuDuty(id) {
	    var param = { "configId": id };
	    dataService.deleteDanMu().then(function (res) {
	      NotifyService.success(res.data.data);
	      reloadList();
	    }, function (res) {
	      NotifyService.danger("删除任务失败");
	      return;
	    });
	  }
	
	  function active() {
	    getDanMuList();
	  }
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	NewDMDutyController.$inject = ["NotifyService", "$uibModalInstance", "dataService"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NewDMDutyController = NewDMDutyController;
	function NewDMDutyController(NotifyService, $uibModalInstance, dataService) {
	    'ngInject';
	    'use strict';
	
	    var vm = this;
	    vm.newDMDuty = {};
	    vm.addDM = addDM;
	    console.log("进入新增页面");
	    function addDM(data) {
	        // console.log("弹幕参数",data)
	        dataService.addDanMu(data).then(function (res) {
	            NotifyService.success('提交成功,稍等一分钟,任务正式开始');
	            console.log("新增任务的信息", data);
	            $uibModalInstance.close();
	            console.log("新增人气成");
	        }, function (res) {
	            NotifyService.danger("新增失败");
	            return;
	        });
	    }
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DingYueController = DingYueController;
	function DingYueController() {
	    'ngInject';
	    'use strict';
	
	    var vm = this;
	
	    vm.name = "dreamapple";
	    vm.age = 20;
	    vm.changeAge = function () {
	        console.log("this is xxxx");
	        vm.age = 0;
	    };
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	LiWuController.$inject = ["$uibModal", "dataService", "$cookieStore", "$state", "NotifyService", "$timeout"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LiWuController = LiWuController;
	function LiWuController($uibModal, dataService, $cookieStore, $state, NotifyService, $timeout) {
	    'ngInject';
	    'use strict';
	
	    var vm = this;
	    vm.liWuList = [];
	    vm.delLiWuDuty = delLiWuDuty;
	    vm.addLiWu = addLiWu;
	    // 获取礼物列表
	    function getLiwuList() {}
	    // 新增礼物
	    function addLiWu() {}
	    // 删除礼物
	    function delLiWuDuty(id) {
	        var param = { "configId": id };
	    }
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.BallController = BallController;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function BallController() {
	  'ngInject';
	  'use strict';
	
	  var rand = function rand(min, max) {
	    return parseInt(Math.random() * (max - min) + min);
	  };
	  var myCanvas = document.querySelector("#myCanvas");
	  var ctx = myCanvas.getContext("2d");
	  var canvasWidth = myCanvas.width;
	  var canvasHeight = myCanvas.height;
	
	  var ball = function () {
	    function ball(ctx, canvasWidth, canvasHeight) {
	      _classCallCheck(this, ball);
	
	      this.ctx = ctx;
	      // 颜色
	      this.color = 'rgb(' + rand(1, 256) + ',' + rand(1, 256) + ',' + rand(1, 256);
	      // 半径
	      var r = rand(5, 20);
	      this.r = r;
	      // 坐标
	      this.x = rand(r, canvasWidth - r);
	      this.y = rand(r, canvasHeight - r);
	      this.maxWidth = canvasWidth - this.r;
	      this.maxHeight = canvasHeight - this.r;
	      // 速度
	      var speedX = rand(2, 6);
	      this.speedX = rand(0, 10) > 5 ? speedX : -speedX;
	      var speedY = rand(2, 6);
	      this.speedY = rand(0, 10) > 5 ? speedY : -speedY;
	    }
	
	    _createClass(ball, [{
	      key: 'draw',
	      value: function draw() {
	        this.ctx.beginPath();
	        this.ctx.fillStyle = this.color;
	        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
	        this.ctx.closePath();
	        this.ctx.fill();
	      }
	    }, {
	      key: 'move',
	      value: function move() {
	        this.x += this.speedX;
	        if (this.x >= this.maxWidth) {
	          this.speedX *= -1;
	        } else if (this.x < this.r) {
	          this.speedX *= -1;
	        }
	        this.y += this.speedY;
	        if (this.y >= this.maxHeight) {
	          this.speedY *= -1;
	        } else if (this.y < this.r) {
	          this.speedY *= -1;
	        }
	      }
	    }]);
	
	    return ball;
	  }();
	
	  var balls = [];
	  for (var i = 0; i < 500; i++) {
	    var ball1 = new ball(ctx, canvasWidth, canvasHeight);
	    balls.push(ball1);
	  }
	  setInterval(function () {
	    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	    for (var i = 0; i < balls.length; i++) {
	      balls[i].draw();
	      balls[i].move();
	    }
	  }, 30);
	}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.myDirective = myDirective;
	function myDirective() {
	    'ngInject';
	    'use strict';
	
	    return {
	        restrict: "AE",
	        scope: {
	            name: '@myName',
	            age: '=',
	            changeAge: '&changeMyAge'
	        },
	        replace: true,
	        template: "<div class='my-directive'>" + "<h3>下面部分是我们创建的指令生成的</h3>" + "我的名字是：<span ng-bind='name'></span><br/>" + "我的年龄是：<span ng-bind='age'></span><br/>" + "在这里修改名字：<input type='text' ng-model='name'><br/>" + "<button ng-click='changeAge()'>修改年龄</button>" + "<input type='text' ng-model='age'/>" + " </div>"
	    };
	}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2NjNDNmMWUwYzU3ZGRiMzViZmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbW1vbi9tYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21tb24vc2VydmljZS9rdW5IdHRwLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tbW9uL3NlcnZpY2Uvbm90aWZ5c2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbW1vbi9zZXJ2aWNlL2RhdGFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9SZW5RaS9yZW5xaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL1JlblFpL05ld0R1dHkvbmV3ZHV0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0Rhbk11L2Rhbm11LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvRGFuTXUvTmV3RE1EdXR5L25ld2RtZHV0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0RpbmdZdWUvZGluZ3l1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0xpV3UvbGl3dS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2JhbGwvYmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbW1vbi9zZXJ2aWNlL2RpcmVzdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwicnVuIiwiY29udHJvbGxlciIsImZhY3RvcnkiLCJkaXJlY3RpdmUiLCIkbG9nUHJvdmlkZXIiLCIkaHR0cFByb3ZpZGVyIiwidG9hc3RyQ29uZmlnIiwiZGVidWdFbmFibGVkIiwiYWxsb3dIdG1sIiwidGltZU91dCIsInBvc2l0aW9uQ2xhc3MiLCJwcmV2ZW50RHVwbGljYXRlcyIsInByb2dyZXNzQmFyIiwiaW50ZXJjZXB0b3JzIiwicHVzaCIsInJvdXRlckNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwiJGZ1dHVyZVN0YXRlUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwicnVuQmxvY2siLCIkcm9vdFNjb3BlIiwiJHN0YXRlIiwiJGxvZyIsIiRjb25maXJtTW9kYWxEZWZhdWx0cyIsImRlYnVnIiwiZGVmYXVsdExhYmVscyIsInRpdGxlIiwib2siLCJjYW5jZWwiLCJIdHRwSW50ZXJjZXB0b3IiLCIkcSIsInJlc3BvbnNlSW50ZXJjZXB0b3IiLCJyZXNwb25zZSIsInJlc3BvbnNlSGFuZGxlciIsImRhdGEiLCJoYXNPd25Qcm9wZXJ0eSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWNjZXNzIiwic3RhdHVzIiwiY29kZSIsIkt1bkh0dHAiLCIkaHR0cCIsImJhc2VVcmwiLCJleHBvcnRzIiwiZGVsZXRlSGFuZGxlciIsImdldCIsInBhdGNoIiwicG9zdCIsInB1dCIsImRlbGV0ZSIsIm9wdGlvbnMiLCJOb3RpZnlTZXJ2aWNlIiwibm90aWZ5IiwiaW5zcGluaWFUZW1wbGF0ZSIsImluZm8iLCJtc2ciLCJtZXNzYWdlIiwiY2xhc3NlcyIsIndhcm5pbmciLCJkYW5nZXIiLCJjbGVhckFsbCIsImRhdGFTZXJ2aWNlIiwiJGNvb2tpZVN0b3JlIiwic3RhcnRMb2dpbiIsInF1ZXJ5IiwiZ2V0UmVuUWkiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiYWRkUmVuUWkiLCJkZWxldGVSZW5RaSIsImdldERhbk11IiwiYWRkRGFuTXUiLCJkZWxldGVEYW5NdSIsIk1haW5Db250cm9sbGVyIiwiTG9naW5Db250cm9sbGVyIiwidm0iLCJsb2dpbiIsInVzZXIiLCJ0aGVuIiwicmVzIiwiZ28iLCJSZW5RaUNvbnRyb2xsZXIiLCIkdWliTW9kYWwiLCIkdGltZW91dCIsImFkZE5ld0R1dHkiLCJtb2RhbEluc3RhbmNlIiwib3BlbiIsInNpemUiLCJyZXN1bHQiLCJOZXdEdXR5Q29udHJvbGxlciIsIiR1aWJNb2RhbEluc3RhbmNlIiwiRGFuTVVDb250cm9sbGVyIiwiZGFubXVMaXN0IiwiYWRkTmV3RGFuTXUiLCJkZWxEYW5NdUR1dHkiLCJyZWxvYWRMaXN0IiwiZ2V0RGFuTXVMaXN0IiwiZXJyb3JfY29kZSIsInJlbW92ZSIsImlkIiwicGFyYW0iLCJhY3RpdmUiLCJOZXdETUR1dHlDb250cm9sbGVyIiwibmV3RE1EdXR5IiwiYWRkRE0iLCJjbG9zZSIsIkRpbmdZdWVDb250cm9sbGVyIiwibmFtZSIsImFnZSIsImNoYW5nZUFnZSIsIkxpV3VDb250cm9sbGVyIiwibGlXdUxpc3QiLCJkZWxMaVd1RHV0eSIsImFkZExpV3UiLCJnZXRMaXd1TGlzdCIsIkJhbGxDb250cm9sbGVyIiwicmFuZCIsIm1pbiIsIm1heCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsIm15Q2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwid2lkdGgiLCJjYW52YXNIZWlnaHQiLCJoZWlnaHQiLCJiYWxsIiwiY29sb3IiLCJyIiwieCIsInkiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInNwZWVkWCIsInNwZWVkWSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsImJhbGxzIiwiaSIsImJhbGwxIiwic2V0SW50ZXJ2YWwiLCJjbGVhclJlY3QiLCJsZW5ndGgiLCJkcmF3IiwibW92ZSIsIm15RGlyZWN0aXZlIiwicmVzdHJpY3Qi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SUFBSWtCLElBQUUsR0FBRUEsSUFBRUQsTUFBTUssUUFBT0osS0FBSTtPQUM3QkQsTUFBTUMsR0FBR0s7T0FDVE4sTUFBTUMsR0FBR007O01BRVg7Ozs7Ozs7QUM3RE47O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztLQUN6QyxPQUFPOztBQUVYLFNBTGdCQztBQUFULFVBQVNBLGNBQWM7S0FDNUI7S0FDQTs7S0FDQSxPQUFPO1NBQ0pDLFVBQVU7U0FDVkMsT0FBTzthQUNIakQsTUFBTTthQUNOQyxLQUFLO2FBQ0xDLFdBQVc7O1NBRWZnRCxTQUFTO1NBQ1RDLFVBQVUsK0JBQ04sNkJBQ0EsNENBQ0EsMkNBQ0EscURBQ0EsaURBQ0Esd0NBQ0EiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2NjNDNmMWUwYzU3ZGRiMzViZmEiLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcbmltcG9ydCB7SHR0cEludGVyY2VwdG9yfSBmcm9tICcuL2NvbW1vbi9tYXN0ZXInO1xuXG5pbXBvcnQge0t1bkh0dHB9IGZyb20gJy4vY29tbW9uL3NlcnZpY2Uva3VuSHR0cCc7XG5pbXBvcnQgeyBOb3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi9jb21tb24vc2VydmljZS9ub3RpZnlzZXJ2aWNlJztcbmltcG9ydCB7ZGF0YVNlcnZpY2V9IGZyb20gJy4vY29tbW9uL3NlcnZpY2UvZGF0YVNlcnZpY2UnO1xuXG5pbXBvcnQge01haW5Db250cm9sbGVyfSBmcm9tICcuL21haW4vbWFpbic7XG5pbXBvcnQge0xvZ2luQ29udHJvbGxlcn0gZnJvbSAnLi9sb2dpbi9sb2dpbic7XG5pbXBvcnQge1JlblFpQ29udHJvbGxlcn0gZnJvbSAnLi9SZW5RaS9yZW5xaSc7XG5pbXBvcnQge05ld0R1dHlDb250cm9sbGVyfSBmcm9tICcuL1JlblFpL05ld0R1dHkvbmV3ZHV0eSdcbmltcG9ydCB7RGFuTVVDb250cm9sbGVyfSBmcm9tICcuL0Rhbk11L2Rhbm11JztcbmltcG9ydCB7TmV3RE1EdXR5Q29udHJvbGxlcn0gZnJvbSAnLi9EYW5NdS9OZXdETUR1dHkvbmV3ZG1kdXR5JztcbmltcG9ydCB7RGluZ1l1ZUNvbnRyb2xsZXJ9IGZyb20gJy4vRGluZ1l1ZS9kaW5neXVlJztcbmltcG9ydCB7TGlXdUNvbnRyb2xsZXJ9IGZyb20gJy4vTGlXdS9saXd1JztcbmltcG9ydCB7bXlEaXJlY3RpdmV9IGZyb20gJy4vY29tbW9uL3NlcnZpY2UvZGlyZXN0aXZlJztcblxuXG5pbXBvcnR7QmFsbENvbnRyb2xsZXJ9IGZyb20gJy4vYmFsbC9iYWxsJztcbmFuZ3VsYXIubW9kdWxlKCdrdW4nLCBbJ25nQW5pbWF0ZScsXG4nbmdSZXNvdXJjZScsICduZ0Nvb2tpZXMnLCAnbmdNZXNzYWdlcycsXG4gJ25nVG91Y2gnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsXG4gICduZ1N0b3JhZ2UnLCAnYW5ndWxhci1mbGV4c2xpZGVyJywnY3QudWkucm91dGVyLmV4dHJhcycsXG4gICd0b2FzdHInLCAnY2dOb3RpZnknLCAnYW5ndWxhci1jb25maXJtJywgJ25nRmlsZVVwbG9hZCcsXG4gICdjb20uMmZkZXZzLnZpZGVvZ3VsYXInLCAnY29tLjJmZGV2cy52aWRlb2d1bGFyLnBsdWdpbnMuY29udHJvbHMnLFxuICAgJ2NvbS4yZmRldnMudmlkZW9ndWxhci5wbHVnaW5zLm92ZXJsYXlwbGF5JywgJ2NvbS4yZmRldnMudmlkZW9ndWxhci5wbHVnaW5zLnBvc3RlcicsXG4gICAnbG9jYWx5dGljcy5kaXJlY3RpdmVzJ10pXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxuICAucnVuKHJ1bkJsb2NrKVxuICAuY29uZmlnKGNvbmZpZylcblxuICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJyxMb2dpbkNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsTWFpbkNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdSZW5RaUNvbnRyb2xsZXInLFJlblFpQ29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ05ld0R1dHlDb250cm9sbGVyJyxOZXdEdXR5Q29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ0Rhbk1VQ29udHJvbGxlcicsRGFuTVVDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignTmV3RE1EdXR5Q29udHJvbGxlcicsTmV3RE1EdXR5Q29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ0RpbmdZdWVDb250cm9sbGVyJyxEaW5nWXVlQ29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ0xpV3VDb250cm9sbGVyJyxMaVd1Q29udHJvbGxlcilcblxuICAuY29udHJvbGxlcignQmFsbENvbnRyb2xsZXInLEJhbGxDb250cm9sbGVyKVxuXG4gIC5mYWN0b3J5KCdLdW5IdHRwJyxLdW5IdHRwKVxuICAuZmFjdG9yeSgnTm90aWZ5U2VydmljZScsTm90aWZ5U2VydmljZSlcbiAgLmZhY3RvcnkoJ2RhdGFTZXJ2aWNlJyxkYXRhU2VydmljZSlcbiAgLmZhY3RvcnkoJ0h0dHBJbnRlcmNlcHRvcicsSHR0cEludGVyY2VwdG9yKVxuXG4gIC5kaXJlY3RpdmUoJ215RGlyZWN0aXZlJyxteURpcmVjdGl2ZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsICRodHRwUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XG4gICAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG4gICAgLy8gJGNvb2tpZVN0b3JlLnB1dCgnbXlGYXZvcml0ZScsJ29hdG1lYWwnKTtcbiAgICAvLyAvLyBHZXQgY29va2llXG4gICAgLy8gdmFyIHhDb29raWUgPSAkY29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgLy8gY29uc29sZS5sb2coJ+i/mWNvbmdmaWfph4znmoRjb29raWUnLHhDb29raWUpO1xuICAgIC8vIC8vIFJlbW92aW5nIGEgY29va2llXG4gICAgLy8gJGNvb2tpZVN0b3JlLnJlbW92ZSgnbXlGYXZvcml0ZScpO1xuICAgIC8vICRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7ICdDb29raWVzJyA6ICd4eHh4eCcgfTtcblxuICAvLyAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdBdXRoaW50ZXJjZXB0b3InKTtcbiAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnSHR0cEludGVyY2VwdG9yJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRmdXR1cmVTdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gICd1c2Ugc3RyaWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ21haW4nLCB7XG4gICAgICB1cmw6ICcvbWFpbicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcbiAgICAuc3RhdGUoJ21haW4ucmVucWknLCB7XG4gICAgICB1cmw6ICcvcmVucWknLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvUmVuUWkvcmVucWkuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnUmVuUWlDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pXG4gICAgLnN0YXRlKCdtYWluLmRhbm11Jywge1xuICAgICAgdXJsOiAnL2Rhbm11JyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL0Rhbk11L2Rhbm11Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0Rhbk1VQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICAgIC5zdGF0ZSgnbWFpbi5kaW5neXVlJywge1xuICAgICAgdXJsOiAnL2Rpbmd5dWUnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvRGluZ1l1ZS9kaW5neXVlLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0RpbmdZdWVDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pXG4gICAgLnN0YXRlKCdtYWluLmxpd3UnLCB7XG4gICAgICB1cmw6ICcvbGl3dScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9MaVd1L2xpd3UuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGlXdUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcbiAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICAgIC5zdGF0ZSgnbWFpbi5iYWxsJywge1xuICAgICAgdXJsOiAnL2JhbGwnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvYmFsbC9iYWxsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0JhbGxDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pO1xuXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvbWFpbi9yZW5xaScpO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkcm9vdFNjb3BlLCAkc3RhdGUsICAkbG9nLCAkY29uZmlybU1vZGFsRGVmYXVsdHMpIHtcbiAgJ25nSW5qZWN0JztcbiAgJ3VzZSBzdHJpY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcblxuICAvL0NPTkZJUk0gQ09ORklHXG4gICRjb25maXJtTW9kYWxEZWZhdWx0cy5kZWZhdWx0TGFiZWxzLnRpdGxlID0gJ+ehruiupCc7XG4gICRjb25maXJtTW9kYWxEZWZhdWx0cy5kZWZhdWx0TGFiZWxzLm9rID0gJ+ehruiupCc7XG4gICRjb25maXJtTW9kYWxEZWZhdWx0cy5kZWZhdWx0TGFiZWxzLmNhbmNlbCA9ICflj5bmtognO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJleHBvcnQgZnVuY3Rpb24gSHR0cEludGVyY2VwdG9yKCRxKSB7XG4gICduZ0luamVjdCc7XG4gIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3IgPSB7XG4gICAgcmVzcG9uc2U6IHJlc3BvbnNlSGFuZGxlclxuICB9O1xuXG4gIHJldHVybiByZXNwb25zZUludGVyY2VwdG9yO1xuXG5cbiAgZnVuY3Rpb24gcmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlKSB7XG4gICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdzdWNjZXNzJykpIHtcbiAgICAgIHJldHVybiAkcShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzdWNjZXNzID0gZGF0YS5zdWNjZXNzO1xuICAgICAgICByZXNwb25zZS5kYXRhID0gZGF0YS5kYXRhO1xuICAgICAgICBpZiAoc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9IHJlc3BvbnNlLmRhdGEuY29kZSB8fCByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbW1vbi9tYXN0ZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gS3VuSHR0cCgkaHR0cCkge1xuICAnbmdJbmplY3QnO1xuICBjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly8xMDEuMjM2LjQ2LjE0OTo4MDgwLyc7XG5cbiAgY29uc3QgZXhwb3J0cyA9IHtcbiAgICAnZGVsZXRlJzogZGVsZXRlSGFuZGxlcixcbiAgICAnZ2V0JzogZ2V0LFxuICAgICdwYXRjaCc6IHBhdGNoLFxuICAgICdwb3N0JzogcG9zdCxcbiAgICAncHV0JzogcHV0XG4gIH07XG5cbiAgZXhwb3J0cy5iYXNlVXJsID0gYmFzZVVybDtcbiAgLy8gUHVibGljIEFQSSBoZXJlXG4gIHJldHVybiBleHBvcnRzO1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZUhhbmRsZXIodXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKCcnICsgYmFzZVVybCArICcnICsgdXJsICsgJycsIGNvbmZpZyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXQodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnJyArIGJhc2VVcmwgKyAnJyArIHVybCArICcnLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdGNoKHVybCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiAkaHR0cC5wYXRjaCgnJyArIGJhc2VVcmwgKyAnJyArIHVybCArICcnLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJycgKyBiYXNlVXJsICsgJycgKyB1cmwgKyAnJywgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXQodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gJGh0dHAucHV0KCcnICsgYmFzZVVybCArICcnICsgdXJsICsgJycsIGRhdGEsIGNvbmZpZyk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21tb24vc2VydmljZS9rdW5IdHRwLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE5vdGlmeVNlcnZpY2Uobm90aWZ5KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgICBjb25zdCBpbnNwaW5pYVRlbXBsYXRlID0gJ2FwcC9jb21tb24vdmlld3Mvbm90aWZ5Lmh0bWwnO1xuXG4gICAgIGZ1bmN0aW9uIGluZm8obXNnKSB7XG4gICAgICAgbm90aWZ5KHtcbiAgICAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICAgICAgIGNsYXNzZXM6ICdhbGVydC1pbmZvJyxcbiAgICAgICAgIHRlbXBsYXRlVXJsOiBpbnNwaW5pYVRlbXBsYXRlXG4gICAgICAgfSk7XG4gICAgIH1cblxuICAgICBmdW5jdGlvbiBzdWNjZXNzKG1zZykge1xuICAgICAgIG5vdGlmeSh7XG4gICAgICAgICBtZXNzYWdlOiBtc2csXG4gICAgICAgICBjbGFzc2VzOiAnYWxlcnQtc3VjY2VzcycsXG4gICAgICAgICB0ZW1wbGF0ZVVybDogaW5zcGluaWFUZW1wbGF0ZVxuICAgICAgIH0pO1xuICAgICB9XG5cbiAgICAgZnVuY3Rpb24gd2FybmluZyhtc2cpIHtcbiAgICAgICBub3RpZnkoe1xuICAgICAgICAgbWVzc2FnZTogbXNnLFxuICAgICAgICAgY2xhc3NlczogJ2FsZXJ0LXdhcm5pbmcnLFxuICAgICAgICAgdGVtcGxhdGVVcmw6IGluc3BpbmlhVGVtcGxhdGVcbiAgICAgICB9KTtcbiAgICAgfVxuXG4gICAgIGZ1bmN0aW9uIGRhbmdlcihtc2cpIHtcbiAgICAgICBub3RpZnkoe1xuICAgICAgICAgbWVzc2FnZTogbXNnLFxuICAgICAgICAgY2xhc3NlczogJ2FsZXJ0LWRhbmdlcicsXG4gICAgICAgICB0ZW1wbGF0ZVVybDogaW5zcGluaWFUZW1wbGF0ZVxuICAgICAgIH0pO1xuICAgICB9XG5cbiAgICAgZnVuY3Rpb24gY2xlYXJBbGwoKSB7XG4gICAgICAgLy8gbm90aWZ5LmNsb3NlQWxsKCk7XG4gICAgIH1cblxuICAgICBjb25zdCBleHBvcnRzID0ge1xuICAgICAgIGluZm86IGluZm8sXG4gICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICB3YXJuaW5nOiB3YXJuaW5nLFxuICAgICAgIGRhbmdlcjogZGFuZ2VyLFxuICAgICAgIGNsZWFyQWxsOiBjbGVhckFsbFxuICAgICB9O1xuICAgICByZXR1cm4gZXhwb3J0cztcblxuICAgfVxuXG4vLyB9KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21tb24vc2VydmljZS9ub3RpZnlzZXJ2aWNlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGRhdGFTZXJ2aWNlKEt1bkh0dHAsJGNvb2tpZVN0b3JlKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLyDnmbvlvZXmjqXlj6NcbiAgICBmdW5jdGlvbiBzdGFydExvZ2luKHF1ZXJ5KXtcbiAgICAgIHJldHVybiBLdW5IdHRwLnBvc3QoJ2xvZ2luJyxxdWVyeSlcbiAgICB9XG4gICAgLy8g5Lq65rCUXG4gICAgLy8g6I635Y+W5Lq65rCU5YiX6KGo55qE5o6l5Y+jXG4gICAgZnVuY3Rpb24gZ2V0UmVuUWkoKXtcbiAgICAgIGNvbnN0IHRva2VuID0gJGNvb2tpZVN0b3JlLmdldCgndG9rZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVNlcnZpY2VcIix0b2tlbilcbiAgICAgIHJldHVybiBLdW5IdHRwLmdldCgncG9wdWxhdGlvbi90YXNrcycse2hlYWRlcnM6e1wiQ29va2llc1wiOnRva2VufX0pXG4gICAgfVxuICAgIC8vIOaWsOWinuS6uuawlOS7u+WKoeeahOaOpeWPo1xuICAgIGZ1bmN0aW9uIGFkZFJlblFpKHF1ZXJ5KXtcbiAgICAgIGNvbnN0IHRva2VuID0gJGNvb2tpZVN0b3JlLmdldCgndG9rZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVNlcnZpY2VcIix0b2tlbilcbiAgICAgIHJldHVybiBLdW5IdHRwLnBvc3QoJ3BvcHVsYXRpb24vYWRkX3Rhc2snLHF1ZXJ5LHtoZWFkZXJzOntcIkNvb2tpZXNcIjp0b2tlbn19KVxuICAgIH1cbiAgICAvL+WIoOmZpOS6uuawlOaOpeWPo1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlUmVuUWkocXVlcnkpe1xuICAgICAgY29uc3QgdG9rZW4gPSAkY29va2llU3RvcmUuZ2V0KCd0b2tlbicpO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhU2VydmljZVwiLHRva2VuKVxuICAgICAgcmV0dXJuIEt1bkh0dHAucG9zdCgncG9wdWxhdGlvbi9kZWxldGVfdGFzaycscXVlcnkse2hlYWRlcnM6e1wiQ29va2llc1wiOnRva2VufX0pXG4gICAgfVxuICAgIC8vIOW8ueW5lVxuICAgIC8vIOiOt+WPluW8ueW5leWIl+ihqFxuICAgIGZ1bmN0aW9uIGdldERhbk11KCl7XG4gICAgICBjb25zdCB0b2tlbiA9ICRjb29raWVTdG9yZS5nZXQoJ3Rva2VuJyk7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFTZXJ2aWNlXCIsdG9rZW4pXG4gICAgICByZXR1cm4gS3VuSHR0cC5nZXQoJycse2hlYWRlcnM6e1wiQ29va2llc1wiOnRva2VufX0pXG4gICAgfVxuICAgIC8vIOaWsOWinuW8ueW5leS7u+WKoVxuICAgIGZ1bmN0aW9uIGFkZERhbk11KCl7XG4gICAgICBjb25zdCB0b2tlbiA9ICRjb29raWVTdG9yZS5nZXQoJ3Rva2VuJyk7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFTZXJ2aWNlXCIsdG9rZW4pXG4gICAgICByZXR1cm4gS3VuSHR0cC5nZXQoJycse2hlYWRlcnM6e1wiQ29va2llc1wiOnRva2VufX0pXG4gICAgfVxuICAgIC8vIOWIoOmZpOW8ueW5lVxuICAgIGZ1bmN0aW9uIGRlbGV0ZURhbk11KHF1ZXJ5KXtcbiAgICAgIGNvbnN0IHRva2VuID0gJGNvb2tpZVN0b3JlLmdldCgndG9rZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVNlcnZpY2VcIix0b2tlbilcbiAgICAgIHJldHVybiBLdW5IdHRwLmdldCgnJyxxdWVyeSx7aGVhZGVyczp7XCJDb29raWVzXCI6dG9rZW59fSlcbiAgICB9XG4gICAgdmFyIGV4cG9ydHMgPSB7XG4gICAgICAvL+eZu+W9lVxuICAgICAgc3RhcnRMb2dpbjogc3RhcnRMb2dpbixcbiAgICAgIGdldFJlblFpOmdldFJlblFpLFxuICAgICAgYWRkUmVuUWk6YWRkUmVuUWksXG4gICAgICBkZWxldGVSZW5RaTpkZWxldGVSZW5RaSxcblxuICAgICAgZ2V0RGFuTXU6Z2V0RGFuTXUsXG4gICAgICBhZGREYW5NdTphZGREYW5NdSxcbiAgICAgIGRlbGV0ZURhbk11OmRlbGV0ZURhbk11XG4gICAgfTtcblxuICAgICAgLy8gUHVibGljIEFQSSBoZXJlXG4gICAgICByZXR1cm4gZXhwb3J0cztcblxuXG4gIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tbW9uL3NlcnZpY2UvZGF0YVNlcnZpY2UuanMiLCJleHBvcnQgZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAndXNlIHN0cmljdCc7XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL21haW4uanMiLCJleHBvcnQgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRjb29raWVTdG9yZSxkYXRhU2VydmljZSwkc3RhdGUpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvLyAkY29va2llU3RvcmUucHV0KCdteUZhdm9yaXRlJywnb2F0bWVhbCcpO1xuICAgIC8vIC8vIEdldCBjb29raWVcbiAgICAvLyB2YXIgZmF2b3JpdGVDb29raWUgPSAkY29va2llU3RvcmUuZ2V0KCdteUZhdm9yaXRlJyk7XG4gICAgLy8gLy8gUmVtb3ZpbmcgYSBjb29raWVcbiAgICAvLyAkY29va2llU3RvcmUucmVtb3ZlKCdteUZhdm9yaXRlJyk7XG4gICAgbGV0IHZtPXRoaXM7XG4gICAgdm0uZGF0YT17fTtcbiAgICB2bS5sb2dpbj1sb2dpbjtcbiAgICBmdW5jdGlvbiBsb2dpbih1c2VyKXtcbiAgICAgIGRhdGFTZXJ2aWNlLnN0YXJ0TG9naW4odXNlcilcbiAgICAgICAgLnRoZW4ocmVzPT57XG4gICAgICAgICAgJGNvb2tpZVN0b3JlLnB1dCgndG9rZW4nLHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICAgIHZhciB0b2tlbiA9ICRjb29raWVTdG9yZS5nZXQoJ3Rva2VuJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0b2trZW5cIix0b2tlbik7XG4gICAgICAgICAgJHN0YXRlLmdvKCdtYWluLnJlbnFpJylcblxuICAgICAgICB9LHJlcz0+e1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIixyZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIFJlblFpQ29udHJvbGxlcigkdWliTW9kYWwsZGF0YVNlcnZpY2UsJGNvb2tpZVN0b3JlLCRzdGF0ZSxOb3RpZnlTZXJ2aWNlLCR0aW1lb3V0KSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLyDmlrDlop7kuIDkuKrkurrmsJTku7vliqFcbiAgICBmdW5jdGlvbiBhZGROZXdEdXR5KCl7XG4gICAgICAgbGV0IG1vZGFsSW5zdGFuY2U9JHVpYk1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9SZW5RaS9OZXdEdXR5L25ld2R1dHkuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdOZXdEdXR5Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgIH0pO1xuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBOb3RpZnlTZXJ2aWNlLmRhbmdlcihcIuaWsOWinuaIkOWKn1wiKTtcbiAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICBOb3RpZnlTZXJ2aWNlLmRhbmdlcihcIuaWsOWinuWksei0pVwiKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL1JlblFpL3JlbnFpLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE5ld0R1dHlDb250cm9sbGVyKE5vdGlmeVNlcnZpY2UsJHVpYk1vZGFsSW5zdGFuY2UsZGF0YVNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgICd1c2Ugc3RyaWN0JztcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9SZW5RaS9OZXdEdXR5L25ld2R1dHkuanMiLCJleHBvcnQgZnVuY3Rpb24gRGFuTVVDb250cm9sbGVyKCRjb29raWVTdG9yZSwkdWliTW9kYWwpIHtcbiAgJ25nSW5qZWN0JztcbiAgJ3VzZSBzdHJpY3QnO1xuICBsZXQgdm09dGhpcztcbiAgdm0uZGFubXVMaXN0PVtdO1xuICB2bS5hZGROZXdEYW5NdT1hZGROZXdEYW5NdTtcbiAgdm0uZGVsRGFuTXVEdXR5PWRlbERhbk11RHV0eTtcbiAgZnVuY3Rpb24gcmVsb2FkTGlzdCgpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBnZXREYW5NdUxpc3QoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwi6L+Z5piv5bu25pe25omn6KGM55qE5Ye95pWwXCIpO1xuICAgIH0sIDUwMDApO1xuICB9XG4gIC8vIOiOt+WPluW8ueW5leS7u+WKoeWIl+ihqFxuICBmdW5jdGlvbiBnZXREYW5NdUxpc3QoKSB7XG4gICAgZGF0YVNlcnZpY2UuZ2V0RGFuTXUoKS50aGVuKFxuICAgICAgcmVzPT57XG4gICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGU9PTEpe1xuICAgICAgICAgICRjb29raWVTdG9yZS5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICAgICAgJHN0YXRlLmdvKCdsb2dpbicpO1xuICAgICAgICAgIE5vdGlmeVNlcnZpY2UuZGFuZ2VyKFwi5bCa5pyq55m75b2VL+eZu+W9lei/h+acn++8jOivt+mHjeaWsOeZu+W9lVwiKVxuICAgICAgICB9XG4gICAgICAgIGlmKHJlcy5kYXRhLmVycm9yX2NvZGU9PTApe1xuICAgICAgICAgIHZtLmRhbm11TGlzdD1yZXMuZGF0YS5kYXRhXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZXM9PntcbiAgICAgICAgTm90aWZ5U2VydmljZS5kYW5nZXIoXCLojrflj5bmlbDmja7lpLHotKVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICApXG4gIH1cbiAgLy8g5paw5aKe5by55bmV5Lu75YqhXG4gIGZ1bmN0aW9uIGFkZE5ld0Rhbk11KCl7XG4gICAgbGV0IG1vZGFsSW5zdGFuY2U9JHVpYk1vZGFsLm9wZW4oe1xuICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9EYW5NdS9OZXdETUR1dHkvbmV3ZG1kdXR5Lmh0bWwnLFxuICAgICBjb250cm9sbGVyOiAnTmV3RE1EdXR5Q29udHJvbGxlcicsXG4gICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgc2l6ZTogJ2xnJyxcbiAgIH0pO1xuICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbigpIHtcbiAgICAgcmVsb2FkTGlzdCgpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICBOb3RpZnlTZXJ2aWNlLmRhbmdlcihcIuaWsOWinuWksei0pVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOWIoOmZpOS7u+WKoVxuICBmdW5jdGlvbiBkZWxEYW5NdUR1dHkoaWQpIHtcbiAgICBsZXQgcGFyYW09e1wiY29uZmlnSWRcIjppZH1cbiAgICBkYXRhU2VydmljZS5kZWxldGVEYW5NdSgpLnRoZW4oXG4gICAgICByZXM9PntcbiAgICAgICAgTm90aWZ5U2VydmljZS5zdWNjZXNzKHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICByZWxvYWRMaXN0KCk7XG4gICAgICB9LFxuICAgICAgcmVzPT57XG4gICAgICAgIE5vdGlmeVNlcnZpY2UuZGFuZ2VyKFwi5Yig6Zmk5Lu75Yqh5aSx6LSlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gYWN0aXZlKCl7XG4gICAgZ2V0RGFuTXVMaXN0KClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9EYW5NdS9kYW5tdS5qcyIsImV4cG9ydCBmdW5jdGlvbiBOZXdETUR1dHlDb250cm9sbGVyKE5vdGlmeVNlcnZpY2UsJHVpYk1vZGFsSW5zdGFuY2UsZGF0YVNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBsZXQgdm09dGhpcztcbiAgICB2bS5uZXdETUR1dHk9e307XG4gICAgdm0uYWRkRE0gPSBhZGRETTtcbiAgICBjb25zb2xlLmxvZyhcIui/m+WFpeaWsOWinumhtemdolwiKVxuICAgIGZ1bmN0aW9uIGFkZERNKGRhdGEpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwi5by55bmV5Y+C5pWwXCIsZGF0YSlcbiAgICAgIGRhdGFTZXJ2aWNlLmFkZERhbk11KGRhdGEpLnRoZW4ocmVzPT57XG4gICAgICAgIE5vdGlmeVNlcnZpY2Uuc3VjY2Vzcygn5o+Q5Lqk5oiQ5YqfLOeojeetieS4gOWIhumSnyzku7vliqHmraPlvI/lvIDlp4snKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLmlrDlop7ku7vliqHnmoTkv6Hmga9cIixkYXRhKVxuICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaWsOWinuS6uuawlOaIkFwiKTtcbiAgICAgIH0scmVzPT57XG4gICAgICAgICAgTm90aWZ5U2VydmljZS5kYW5nZXIoXCLmlrDlop7lpLHotKVcIik7XG4gICAgICAgICAgcmV0dXJuIDtcbiAgICAgIH0pXG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL0Rhbk11L05ld0RNRHV0eS9uZXdkbWR1dHkuanMiLCJleHBvcnQgZnVuY3Rpb24gRGluZ1l1ZUNvbnRyb2xsZXIoKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAndXNlIHN0cmljdCc7XG4gICAgbGV0IHZtPXRoaXM7XG4gIFxuICAgIHZtLm5hbWUgPSBcImRyZWFtYXBwbGVcIjtcbiAgICB2bS5hZ2UgPSAyMDtcbiAgICB2bS5jaGFuZ2VBZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgeHh4eFwiKTtcbiAgICAgICAgdm0uYWdlID0gMDtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvRGluZ1l1ZS9kaW5neXVlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIExpV3VDb250cm9sbGVyKCR1aWJNb2RhbCxkYXRhU2VydmljZSwkY29va2llU3RvcmUsJHN0YXRlLE5vdGlmeVNlcnZpY2UsJHRpbWVvdXQpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBsZXQgdm09dGhpcztcbiAgICB2bS5saVd1TGlzdD1bXTtcbiAgICB2bS5kZWxMaVd1RHV0eT1kZWxMaVd1RHV0eTtcbiAgICB2bS5hZGRMaVd1PWFkZExpV3U7XG4gICAgLy8g6I635Y+W56S854mp5YiX6KGoXG4gICAgZnVuY3Rpb24gZ2V0TGl3dUxpc3QoKXtcblxuICAgIH1cbiAgICAvLyDmlrDlop7npLznialcbiAgICBmdW5jdGlvbiBhZGRMaVd1KCl7XG5cbiAgICB9XG4gICAgLy8g5Yig6Zmk56S854mpXG4gICAgZnVuY3Rpb24gZGVsTGlXdUR1dHkoaWQpe1xuICAgICAgbGV0IHBhcmFtPXtcImNvbmZpZ0lkXCI6aWR9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9MaVd1L2xpd3UuanMiLCJleHBvcnQgZnVuY3Rpb24gQmFsbENvbnRyb2xsZXIoKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIHJhbmQ9KG1pbixtYXgpPT5wYXJzZUludChNYXRoLnJhbmRvbSgpKihtYXgtbWluKSttaW4pO1xuICAgIHZhciBteUNhbnZhcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Q2FudmFzXCIpO1xuICAgIHZhciBjdHg9bXlDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGNhbnZhc1dpZHRoPW15Q2FudmFzLndpZHRoO1xuICAgIGNvbnN0IGNhbnZhc0hlaWdodD1teUNhbnZhcy5oZWlnaHQ7XG4gICAgY2xhc3MgYmFsbHtcbiAgICAgIGNvbnN0cnVjdG9yKGN0eCxjYW52YXNXaWR0aCxjYW52YXNIZWlnaHQpe1xuICAgICAgICB0aGlzLmN0eD1jdHg7XG4gICAgICAgIC8vIOminOiJslxuICAgICAgICB0aGlzLmNvbG9yPWByZ2IoJHtyYW5kKDEsMjU2KX0sJHtyYW5kKDEsMjU2KX0sJHtyYW5kKDEsMjU2KX1gO1xuICAgICAgICAvLyDljYrlvoRcbiAgICAgICAgdmFyIHI9cmFuZCg1LDIwKTtcbiAgICAgICAgdGhpcy5yPXI7XG4gICAgICAgIC8vIOWdkOagh1xuICAgICAgICB0aGlzLng9cmFuZChyLGNhbnZhc1dpZHRoLXIpO1xuICAgICAgICB0aGlzLnk9cmFuZChyLGNhbnZhc0hlaWdodC1yKTtcbiAgICAgICAgdGhpcy5tYXhXaWR0aD1jYW52YXNXaWR0aC10aGlzLnI7XG4gICAgICAgIHRoaXMubWF4SGVpZ2h0PWNhbnZhc0hlaWdodC10aGlzLnI7XG4gICAgICAgIC8vIOmAn+W6plxuICAgICAgICB2YXIgc3BlZWRYPXJhbmQoMiw2KTtcbiAgICAgICAgdGhpcy5zcGVlZFg9cmFuZCgwLDEwKT41P3NwZWVkWDotc3BlZWRYO1xuICAgICAgICB2YXIgc3BlZWRZPXJhbmQoMiw2KTtcbiAgICAgICAgdGhpcy5zcGVlZFk9cmFuZCgwLDEwKT41P3NwZWVkWTotc3BlZWRZO1xuXG4gICAgICB9XG4gICAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGU9dGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCx0aGlzLnksdGhpcy5yLDAsTWF0aC5QSSoyLHRydWUpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgfVxuICAgICAgbW92ZSgpe1xuICAgICAgICB0aGlzLngrPXRoaXMuc3BlZWRYO1xuICAgICAgICBpZih0aGlzLng+PXRoaXMubWF4V2lkdGgpe1xuICAgICAgICAgIHRoaXMuc3BlZWRYKj0tMTtcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMueDx0aGlzLnIpe1xuICAgICAgICAgIHRoaXMuc3BlZWRYKj0tMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnkrPXRoaXMuc3BlZWRZO1xuICAgICAgICBpZih0aGlzLnk+PXRoaXMubWF4SGVpZ2h0KXtcbiAgICAgICAgICB0aGlzLnNwZWVkWSo9LTE7XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLnk8dGhpcy5yKSB7XG4gICAgICAgICAgdGhpcy5zcGVlZFkqPS0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBiYWxscz1bXTtcbiAgICBmb3IgKHZhciBpPTA7aTw1MDA7aSsrKXtcbiAgICAgIHZhciBiYWxsMT1uZXcgYmFsbChjdHgsY2FudmFzV2lkdGgsY2FudmFzSGVpZ2h0KTtcbiAgICAgIGJhbGxzLnB1c2goYmFsbDEpXG4gICAgfVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsY2FudmFzV2lkdGgsY2FudmFzSGVpZ2h0KTtcbiAgICAgIGZvcih2YXIgaT0wO2k8YmFsbHMubGVuZ3RoO2krKyl7XG4gICAgICAgIGJhbGxzW2ldLmRyYXcoKTtcbiAgICAgICAgYmFsbHNbaV0ubW92ZSgpXG4gICAgICB9XG4gICAgfSwzMCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2JhbGwvYmFsbC5qcyIsImV4cG9ydCBmdW5jdGlvbiBteURpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcbiAgJ3VzZSBzdHJpY3QnO1xuICByZXR1cm4ge1xuICAgICByZXN0cmljdDogXCJBRVwiLFxuICAgICBzY29wZToge1xuICAgICAgICAgbmFtZTogJ0BteU5hbWUnLFxuICAgICAgICAgYWdlOiAnPScsXG4gICAgICAgICBjaGFuZ2VBZ2U6ICcmY2hhbmdlTXlBZ2UnXG4gICAgIH0sXG4gICAgIHJlcGxhY2U6IHRydWUsXG4gICAgIHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9J215LWRpcmVjdGl2ZSc+XCIgK1xuICAgICAgICAgXCI8aDM+5LiL6Z2i6YOo5YiG5piv5oiR5Lus5Yib5bu655qE5oyH5Luk55Sf5oiQ55qEPC9oMz5cIiArXG4gICAgICAgICBcIuaIkeeahOWQjeWtl+aYr++8mjxzcGFuIG5nLWJpbmQ9J25hbWUnPjwvc3Bhbj48YnIvPlwiICtcbiAgICAgICAgIFwi5oiR55qE5bm06b6E5piv77yaPHNwYW4gbmctYmluZD0nYWdlJz48L3NwYW4+PGJyLz5cIiArXG4gICAgICAgICBcIuWcqOi/memHjOS/ruaUueWQjeWtl++8mjxpbnB1dCB0eXBlPSd0ZXh0JyBuZy1tb2RlbD0nbmFtZSc+PGJyLz5cIiArXG4gICAgICAgICBcIjxidXR0b24gbmctY2xpY2s9J2NoYW5nZUFnZSgpJz7kv67mlLnlubTpvoQ8L2J1dHRvbj5cIiArXG4gICAgICAgICBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBuZy1tb2RlbD0nYWdlJy8+XCIrXG4gICAgICAgICBcIiA8L2Rpdj5cIlxuICAgICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21tb24vc2VydmljZS9kaXJlc3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9