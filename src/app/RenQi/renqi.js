export function RenQiController($uibModal,dataService,$cookieStore,$state,NotifyService,$timeout) {
    'ngInject';
    'use strict';

    // 新增一个人气任务
    function addNewDuty(){
       let modalInstance=$uibModal.open({
        templateUrl: 'app/RenQi/NewDuty/newduty.html',
        controller: 'NewDutyController',
        controllerAs: 'vm',
        size: 'lg',
      });
      modalInstance.result.then(function() {
          NotifyService.danger("新增成功");
         }, function() {
           NotifyService.danger("新增失败");
           return;
         });
    }

}
