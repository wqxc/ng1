/* global malarkey:false, moment:false */
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import {HttpInterceptor} from './common/master';

import {KunHttp} from './common/service/kunHttp';
import { NotifyService } from './common/service/notifyservice';
import {dataService} from './common/service/dataService';

import {MainController} from './main/main';
import {LoginController} from './login/login';
import {RenQiController} from './RenQi/renqi';
import {NewDutyController} from './RenQi/NewDuty/newduty'
import {DanMUController} from './DanMu/danmu';
import {NewDMDutyController} from './DanMu/NewDMDuty/newdmduty';
import {DingYueController} from './DingYue/dingyue';
import {LiWuController} from './LiWu/liwu';
import {myDirective} from './common/service/direstive';


import{BallController} from './ball/ball';
angular.module('kun', ['ngAnimate',
'ngResource', 'ngCookies', 'ngMessages',
 'ngTouch', 'ui.router', 'ui.bootstrap',
  'ngStorage', 'angular-flexslider','ct.ui.router.extras',
  'toastr', 'cgNotify', 'angular-confirm', 'ngFileUpload',
  'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls',
   'com.2fdevs.videogular.plugins.overlayplay', 'com.2fdevs.videogular.plugins.poster',
   'localytics.directives'])
  .config(routerConfig)
  .run(runBlock)
  .config(config)

  .controller('LoginController',LoginController)
  .controller('MainController',MainController)
  .controller('RenQiController',RenQiController)
  .controller('NewDutyController',NewDutyController)
  .controller('DanMUController',DanMUController)
  .controller('NewDMDutyController',NewDMDutyController)
  .controller('DingYueController',DingYueController)
  .controller('LiWuController',LiWuController)

  .controller('BallController',BallController)

  .factory('KunHttp',KunHttp)
  .factory('NotifyService',NotifyService)
  .factory('dataService',dataService)
  .factory('HttpInterceptor',HttpInterceptor)

  .directive('myDirective',myDirective)
