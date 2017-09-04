export function LoginController($cookieStore,dataService,$state) {
    'ngInject';
    'use strict';
    // $cookieStore.put('myFavorite','oatmeal');
    // // Get cookie
    // var favoriteCookie = $cookieStore.get('myFavorite');
    // // Removing a cookie
    // $cookieStore.remove('myFavorite');
    let vm=this;
    vm.data={};
    vm.login=login;
    function login(user){
      dataService.startLogin(user)
        .then(res=>{
          $cookieStore.put('token',res.data.data);
          var token = $cookieStore.get('token');
          console.log("tokken",token);
          $state.go('main.renqi')

        },res=>{
          console.log("error",res);
        });
    }
}
