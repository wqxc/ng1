export function myDirective() {
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
     template: "<div class='my-directive'>" +
         "<h3>下面部分是我们创建的指令生成的</h3>" +
         "我的名字是：<span ng-bind='name'></span><br/>" +
         "我的年龄是：<span ng-bind='age'></span><br/>" +
         "在这里修改名字：<input type='text' ng-model='name'><br/>" +
         "<button ng-click='changeAge()'>修改年龄</button>" +
         "<input type='text' ng-model='age'/>"+
         " </div>"
       }

}
