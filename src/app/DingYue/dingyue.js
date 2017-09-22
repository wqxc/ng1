export function DingYueController() {
    'ngInject';
    'use strict';
    let vm=this;
  
    vm.name = "dreamapple";
    vm.age = 20;
    vm.changeAge = function(){
        console.log("this is xxxx");
        vm.age = 0;
    }

}
