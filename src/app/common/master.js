export function HttpInterceptor($q) {
  'ngInject';
  const responseInterceptor = {
    response: responseHandler
  };

  return responseInterceptor;


  function responseHandler(response) {
    var data = response.data || {};
    if (data.hasOwnProperty('success')) {
      return $q(function (resolve, reject) {
        var success = data.success;
        response.data = data.data;
        if (success === true) {
          resolve(response);
        }
        else {
          response.status = response.data.code || response.status;
          reject(response);
        }
      });
    }
    else {
      return response;
    }
  }

}
