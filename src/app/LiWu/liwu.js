export function LiWuController($uibModal,dataService,$cookieStore,$state,NotifyService,$timeout) {
    'ngInject';
    'use strict';
    let vm=this;
    vm.liWuList=[];
    vm.delLiWuDuty=delLiWuDuty;
    vm.addLiWu=addLiWu;
    // 获取礼物列表
    function getLiwuList(){

    }
    // 新增礼物
    function addLiWu(){

    }
    // 删除礼物
    function delLiWuDuty(id){
      let param={"configId":id}
    }
}
