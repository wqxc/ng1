export function config($logProvider, $httpProvider, toastrConfig) {
  'ngInject';
  // Enable log
    $logProvider.debugEnabled(true);

  // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
    // $cookieStore.put('myFavorite','oatmeal');
    // // Get cookie
    // var xCookie = $cookies.get('token');
    // console.log('这congfig里的cookie',xCookie);
    // // Removing a cookie
    // $cookieStore.remove('myFavorite');
    // $httpProvider.defaults.headers.common = { 'Cookies' : 'xxxxx' };

  // $httpProvider.interceptors.push('Authinterceptor');
  $httpProvider.interceptors.push('HttpInterceptor');
}
