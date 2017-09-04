# zhaimi-rest

A RESTful object-oriented API library based on [restangular](https://github.com/mgonto/restangular)

## Usage

### Config
Config zhaimiRest in `run()` like [index.run.js](../demo/index.run.js#L9)

For example, in franky, we `setBaseUrl`, `setErrorInterceptor` and `extendPromise`.

### Customize a factory with zhaimiRest
- [factory.js](../demo/factory.js) and [factory.spec.js](../demo/factory.spec.js#L15)
- Use [generator-ng-zhaimi](http://git.zhai.me/Stupid/generator-ng-zhaimi)
  - run `yo ng-zhaimi:factory demo`, you will get basic structure of this demo

### Use your factory
You can look [controller.js](../demo/controller.js) and [controller.spec.js](../demo/controller.spec.js) directly
- Basic RESTful apis
  - [get](../demo/controller.js#L38)
  - [post](../demo/controller.js#L46)
  - [getList](../demo/controller.js#L56)
  - [getListWithLoadingFlag](../demo/controller.js#L77)
  - [patch](../demo/controller.js#L88)

- Advanced apis
  - [removeFromCollection](../demo/controller.js#L108)
  - [addIntoCollection](../demo/controller.js#L137)
  - [pagination](../demo/controller.js#L137)

- Legacy apis
  - [getListDeprecated](../demo/controller.js#L64) with non-standard formats `res:{data:{data:[]}}`

### extendPromise
- Usage

  [zhaimi_rest.spec.js](factory.spec.js#L23)'s extendPromise part

- Params
  - extension

    used to extend promise, type is decided by `options.type`

  - options
    - type `['interceptor', 'members', 'function']`
    - promiseChain
    - only works if type is function
