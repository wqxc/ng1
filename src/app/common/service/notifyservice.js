export function NotifyService(notify) {
    'ngInject';

     const inspiniaTemplate = 'app/common/views/notify.html';

     function info(msg) {
       notify({
         message: msg,
         classes: 'alert-info',
         templateUrl: inspiniaTemplate
       });
     }

     function success(msg) {
       notify({
         message: msg,
         classes: 'alert-success',
         templateUrl: inspiniaTemplate
       });
     }

     function warning(msg) {
       notify({
         message: msg,
         classes: 'alert-warning',
         templateUrl: inspiniaTemplate
       });
     }

     function danger(msg) {
       notify({
         message: msg,
         classes: 'alert-danger',
         templateUrl: inspiniaTemplate
       });
     }

     function clearAll() {
       // notify.closeAll();
     }

     const exports = {
       info: info,
       success: success,
       warning: warning,
       danger: danger,
       clearAll: clearAll
     };
     return exports;

   }

// })();
