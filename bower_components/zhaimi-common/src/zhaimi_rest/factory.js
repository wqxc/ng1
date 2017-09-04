(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name zhaimiCommon.zhaimiRest
   * @description
   * # zhaimiRest
   * Factory in the zhaimiCommon.
   */
  angular
    .module('zhaimi.common.zhaimiRest', ['restangular'])
    .factory('zhaimiRest', zhaimiRestFactory);

  function zhaimiRestFactory(Restangular, $q) {
    var extendFuncs = [];
    var zhaimiRest = Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.addResponseInterceptor(listNormalizingInterceptor);
      RestangularConfigurer.addResponseInterceptor(returnDataInterceptor);
      RestangularConfigurer.setOnElemRestangularized(addGlobalMethods);
    });
    zhaimiRest.extendPromise = extendPromise;
    zhaimiRest.extendPromise(add$loading);
    /* test-code */
    zhaimiRest._listNormalizingInterceptor = listNormalizingInterceptor;
    /* end-test-code */
    return zhaimiRest;

    function extendPromiseOptions(extension, options) {
      var defaultOptions = {
        type: 'interceptor',
        promiseChain: false,
      };
      options = options || {};
      if (!options.type && angular.isObject(extension) && !angular.isArray(extension)) {
        options.type = 'members';
      }
      return angular.extend(defaultOptions, options);
    }

    function extendPromise(extension, options) {
      options = extendPromiseOptions(extension, options);
      var extendFunc = null;
      var members = {};
      // TODO
      switch (options.type) {
        case 'interceptor': {
          if (!angular.isFunction(extension)) {
            throw new Error('An interceptor must be a function');
          }
          extendFunc = extension;
          break;
        }
        case 'members': {
          if (!angular.isObject(extension) || angular.isArray(extension)) {
            throw new Error('A members\'s map must be an object');
          }
          members = extension;
          break;
        }
        case 'function': {
          if (angular.isFunction(extension)) {
            members[extension.name] = extension;
          } else if (angular.isArray(extension)) {
            angular.forEach(extension, function(func) {
              members[func.name] = func;
            });
          } else if (angular.isObject(extension)) {
            members = extension;
          } else {
            throw new Error('A function type extension must be a function (or map or array of functions)');
          }
          if (options.promiseChain) {
            angular.forEach(members, function(member, name) {
              members[name] = promiseChainify(member);
            });
          }
          break;
        }
      }

      extendFuncs.push(extendFunc ? extendFunc : function(promise) {
        return angular.extend(promise, members);
      });

      return zhaimiRest.setRestangularizePromiseInterceptor(extendPromiseInterceptor);
    }

    function promiseChainify(funcInChain) {
      return function() {
        var originPromise = this;
        var resultPromise = funcInChain.apply(originPromise, arguments);
        resultPromise.$object = originPromise.$object;
        return resultPromise;
      };
    }

    function extendPromiseInterceptor(promise) {
      var originalThen = promise.then;
      promise.then = function() {
        var resultPromise = originalThen.apply(this, arguments);
        return extendPromiseInterceptor(resultPromise);
      };
      angular.forEach(extendFuncs, function(extendFunc) {
        promise = extendFunc(promise);
      });
      return promise;
    }

    function addGlobalMethods(element, isCollection, route, restangular) {
      if (!isCollection) {
        return element;
      }
      element.restangularOne = element.one;
      angular.extend(element, {
        create: create,
        one: one,
        remove: removeFromCollection,
        add: addIntoCollection,
        extendModel: extendModel,
        extendCollection: extendCollection,
      });

      return element;

      function extendModel(extension) {
        var func = angular.isFunction(extension) ? extension : function(item) {
          return angular.extend(item, extension);
        };
        restangular.extendModel(element.route, func);
        return this;
      }

      function extendCollection(extension) {
        var func = angular.isFunction(extension) ? extension : function(collection) {
          return angular.extend(collection, extension);
        };
        restangular.extendCollection(element.route, func);
        func(element);
        return this;
      }
      // Create a new empty element in the collection with fields from obj,
      // which can be later .save()'d via a POST request.
      function create(obj) {
        return restangular.restangularizeElement(
          this.parentResource, obj || {}, this.route);
      }

      function one(type, id) {
        if (arguments.length === 1) {
          // Handle the case of SomeResource.one('id').
          id = type;
          return parentPath(this.parentResource).one(this.route, id);
        }
        // Otherwise, delegate to Restangular.one.
        return this.restangularOne.apply(this, arguments);

        function parentPath(resource) {
          if (!resource) {
            return restangular;
          }
          return parentPath(resource.parentResource).one(resource.route, resource.id);
        }
      }

      function removeFromCollection(element) {
        if (!element) {
          return extendPromiseInterceptor($q.reject({data: '无法删除空对象'}));
        }
        // use id to remove an element;
        var id = element.id || element;
        var collection = this;
        collection.$loading = true;
        // create an element and call its remove method
        return collection.create({id: id})
          .remove()
          .then(function(data) {
            angular.forEach(collection, function(element, index) {
              if (element.id === id) {
                collection.splice(index, 1);
              }
            });
            return data;
          }).finally(function() {
            collection.$loading = false;
          });
      }

      function addIntoCollection(element) {
        if (!element) {
          return extendPromiseInterceptor($q.reject({data: '无法创建空对象'}));
        }
        var collection = this;
        collection.$loading = true;
        var restangularizedElement = element.restangularized ? element : collection.create(element);
        return restangularizedElement
          .save()
          .then(function(data) {
            collection.push(restangularizedElement);
            return data;
          })
          .finally(function() {
            collection.$loading = false;
          });
      }
    }
  }

  function listNormalizingInterceptor(data, operation, what, url, res, defer) {
    try {
      if (operation === 'getList' && !angular.isArray(data)) {
        var items = data.items;
        var pagination = data.pagination;

        if (items == null) {
          for (var key in data) {
            if (angular.isArray(data[key])) {
              if (items == null) {
                items = data[key];
              } else {
                throw new Error('There are multiple arrays! I\'m confused...');
              }
            }
          }
          if (items == null) {
            throw new Error('Missing items array!');
          }
        }

        if (pagination == null) {
          // Add legacy pagination metadata handling here:
          pagination = {
            itemCount: data.count,
            currentPage: data.currentPage,
            pageCount: data.pageCount,
            perPage: data.perPage,
          };
        }
        if (res.config.params) {
          pagination.currentPage = pagination.currentPage || res.config.params.page;
          pagination.perPage = pagination.perPage || res.config.params.perPage;
        }
        pagination.currentPage = pagination.currentPage || 1;

        if (pagination.itemCount == null) {
          throw new Error('Missing itemCount field in pagination!');
        }
        if (!pagination.perPage) {
          throw new Error('Missing perPage field in pagination!');
        }

        if (!pagination.pageCount) {
          pagination.pageCount =
            Math.ceil(pagination.itemCount / pagination.perPage);
        }

        data = items;
        data.$pagination = pagination;
        data.$query = res.config.params;
      }
      return data;
    } catch (err) {
      return defer.reject(err);
    }
  }

  function returnDataInterceptor(data, operation) {
    // Should return created, updated or deleted element,
    // but backend devs have no time ...
    switch (operation) {
      case 'post':
      case 'patch':
      case 'remove': {
        if (!angular.isObject(data)) return null;
        break;
      }
    }
    return data;
  }

  function add$loading(promise) {
    if (promise.$object) {
      Object.defineProperty(promise.$object, '$loading', {
        configurable: true,
        enumerable: false,
        value: true,
      });
      promise.finally(function() {
        if (promise.$object) {
          delete promise.$object.$loading;
        }
      });
    }
    return promise;
  }

})();
