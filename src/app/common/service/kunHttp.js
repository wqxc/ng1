export function KunHttp($http) {
  'ngInject';
  const baseUrl = 'http://101.236.46.149:8080/';

  const exports = {
    'delete': deleteHandler,
    'get': get,
    'patch': patch,
    'post': post,
    'put': put
  };

  exports.baseUrl = baseUrl;
  // Public API here
  return exports;

  function deleteHandler(url, config) {
    return $http.delete('' + baseUrl + '' + url + '', config);
  }

  function get(url, options) {
    return $http.get('' + baseUrl + '' + url + '', options);
  }

  function patch(url, data, options) {
    return $http.patch('' + baseUrl + '' + url + '', data, options);
  }

  function post(url, data, options) {
    return $http.post('' + baseUrl + '' + url + '', data, options);
  }

  function put(url, data, config) {
    return $http.put('' + baseUrl + '' + url + '', data, config);
  }

}
