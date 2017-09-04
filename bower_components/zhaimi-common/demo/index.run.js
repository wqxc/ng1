(function() {
  'use strict';
  angular
    .module('zhaimiRestDemo')
    .run(zhaimiRestConfigScript);

  function zhaimiRestConfigScript(zhaimiRest, $log, $q) {
    zhaimiRest
      .setBaseUrl('/api/')
      .setErrorInterceptor(errorLoggingInterceptor)
      .extendPromise({notify: notify})
      .extendPromise(addGetArray);

    function notify(successWord) {
      return this.then(function(res) {
        if (successWord) {
          $log.info(successWord);
        }
        return res;
      }, function(res) {
        $log.warn(res.data);
        return $q.reject(res);
      });
    }

    function errorLoggingInterceptor(res) {
      $log.error(res);
      return true;
    }

    // Complement for promise.get method, whose $object is an object by default
    function addGetArray(promise) {
      promise.getArray = function(fieldName) {
        var $array = [];
        var gotArray = promise.then(function(res) {
          if (angular.isArray(res[fieldName])) {
            angular.extend($array, res[fieldName]);
          } else {
            throw new Error('Result should be an array');
          }
          return $array;
        });
        gotArray.$object = $array;
        return gotArray;
      };
      return promise;
    }
  }

})();
