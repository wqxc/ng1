export function dataService(KunHttp,$cookieStore) {
    'ngInject';
    'use strict';

    // 登录接口
    function startLogin(query){
      return KunHttp.post('login',query)
    }
    // 人气
    // 获取人气列表的接口
    function getRenQi(){
      const token = $cookieStore.get('token');
      console.log("dataService",token)
      return KunHttp.get('population/tasks',{headers:{"Cookies":token}})
    }
    // 新增人气任务的接口
    function addRenQi(query){
      const token = $cookieStore.get('token');
      console.log("dataService",token)
      return KunHttp.post('population/add_task',query,{headers:{"Cookies":token}})
    }
    //删除人气接口

    function deleteRenQi(query){
      const token = $cookieStore.get('token');
      console.log("dataService",token)
      return KunHttp.post('population/delete_task',query,{headers:{"Cookies":token}})
    }
    // 弹幕
    // 获取弹幕列表
    function getDanMu(){
      const token = $cookieStore.get('token');
      console.log("dataService",token)
      return KunHttp.get('',{headers:{"Cookies":token}})
    }
    // 新增弹幕任务
    function addDanMu(){
      const token = $cookieStore.get('token');
      console.log("dataService",token)
      return KunHttp.get('',{headers:{"Cookies":token}})
    }
    // 删除弹幕
    function deleteDanMu(query){
      const token = $cookieStore.get('token');
      console.log("dataService",token)
      return KunHttp.get('',query,{headers:{"Cookies":token}})
    }
    var exports = {
      //登录
      startLogin: startLogin,
      getRenQi:getRenQi,
      addRenQi:addRenQi,
      deleteRenQi:deleteRenQi,

      getDanMu:getDanMu,
      addDanMu:addDanMu,
      deleteDanMu:deleteDanMu
    };

      // Public API here
      return exports;


  }
