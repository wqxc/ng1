export function DingYueController() {
    'ngInject';
    'use strict';
    let vm=this;
    vm.dingYueList=[];
    function active(){
      show();
    }
    function show(){
      console.log('这是订阅');
    }
    active()
}
