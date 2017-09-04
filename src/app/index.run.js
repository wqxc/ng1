export function runBlock ($rootScope, $state,  $log, $confirmModalDefaults) {
  'ngInject';
  'use strict';
  $log.debug('runBlock end');

  //CONFIRM CONFIG
  $confirmModalDefaults.defaultLabels.title = '确认';
  $confirmModalDefaults.defaultLabels.ok = '确认';
  $confirmModalDefaults.defaultLabels.cancel = '取消';
}
