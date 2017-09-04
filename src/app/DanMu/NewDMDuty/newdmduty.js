export function NewDMDutyController(NotifyService,$uibModalInstance,dataService) {
    'ngInject';
    'use strict';
    let vm=this;
    vm.newDMDuty={};
    vm.addDM = addDM;
    console.log("进入新增页面")
    function addDM(data) {
      // console.log("弹幕参数",data)
      dataService.addDanMu(data).then(res=>{
        NotifyService.success('提交成功,稍等一分钟,任务正式开始');
        console.log("新增任务的信息",data)
        $uibModalInstance.close();
        console.log("新增人气成");
      },res=>{
          NotifyService.danger("新增失败");
          return ;
      })

    }
}
