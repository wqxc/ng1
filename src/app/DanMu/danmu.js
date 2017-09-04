export function DanMUController($cookieStore,$uibModal) {
  'ngInject';
  'use strict';
  let vm=this;
  vm.danmuList=[];
  vm.addNewDanMu=addNewDanMu;
  vm.delDanMuDuty=delDanMuDuty;
  function reloadList() {
    $timeout(function () {
      getDanMuList();
      // console.log("这是延时执行的函数");
    }, 5000);
  }
  // 获取弹幕任务列表
  function getDanMuList() {
    dataService.getDanMu().then(
      res=>{
        if(res.data.error_code==1){
          $cookieStore.remove('token');
          $state.go('login');
          NotifyService.danger("尚未登录/登录过期，请重新登录")
        }
        if(res.data.error_code==0){
          vm.danmuList=res.data.data
        }
      },
      res=>{
        NotifyService.danger("获取数据失败");
        return;
      }
    )
  }
  // 新增弹幕任务
  function addNewDanMu(){
    let modalInstance=$uibModal.open({
     templateUrl: 'app/DanMu/NewDMDuty/newdmduty.html',
     controller: 'NewDMDutyController',
     controllerAs: 'vm',
     size: 'lg',
   });
   modalInstance.result.then(function() {
     reloadList()
    }, function() {
      NotifyService.danger("新增失败");
      return;
    });
  }

  // 删除任务
  function delDanMuDuty(id) {
    let param={"configId":id}
    dataService.deleteDanMu().then(
      res=>{
        NotifyService.success(res.data.data);
        reloadList();
      },
      res=>{
        NotifyService.danger("删除任务失败");
        return;
      }
    )
  }

  function active(){
    getDanMuList()
  }
}
