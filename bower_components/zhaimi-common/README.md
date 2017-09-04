# zhaimi-common
[![build status](http://git.zhai.me/ci/projects/11/status.png?ref=develop)](http://git.zhai.me/ci/projects/11?ref=develop)

Common front-end library of zhaimi

## Requirement
- [ui-bootstrap components](http://angular-ui.github.io/bootstrap/) 1.2.5
- [restangular](https://github.com/mgonto/restangular) 1.5.1
- [angular-moment](https://github.com/urish/angular-moment) 1.0.0
- [bootstrap-ui-datetime-picker](https://github.com/Gillardo/bootstrap-ui-datetime-picker) 2.3.1

## Prerequisites
Read restangular's [doc](https://github.com/mgonto/restangular) and understand the ideas of

- [$object](https://github.com/mgonto/restangular#enhanced-promises)
- [extendModel](https://github.com/mgonto/restangular#adding-custom-methods-to-models)
- [extendCollection](https://github.com/mgonto/restangular#adding-custom-methods-to-collections)
- interceptors like [addResponseInterceptor](https://github.com/mgonto/restangular#addresponseinterceptor), [addRequestInterceptor](https://github.com/mgonto/restangular#addrequestinterceptor), [setRestangularizePromiseInterceptor](https://github.com/mgonto/restangular/search?utf8=%E2%9C%93&q=setRestangularizePromiseInterceptor)...

## Install
Add a line in your bower dependency and run `bower install` and re-run `grunt/gulp serve`

```json
{
  "zhaimi-common": "git@git.zhai.me:Stupid/zhaimi-common.git"
}
```

Add a dependency in `app.js` or `index.module.js`

```javascript
angular.module('app', ['zhaimi.common']);
```

## Documentation
### modules
All modules and their dependencies are defined in [index.module.js](src/index.module.js)

- zhaimi.common

  exported module, require this module to load all the modules defined by this lib

- [zhaimi.common.directive](src/common_directive/README.md)

  provide some common directives for zhaimi front-end apps, include some encapsulation for [ui-bootstrap components](http://angular-ui.github.io/bootstrap/)

- [zhaimi.common.service](src/common_service/README.md)

  provide common service for zhaimi front-end apps, include Date type format

- zhaimi.common.core

  - [zhaimi.common.zhaimiRest](src/zhaimi_rest/README.md) - [code](src/zhaimi_rest/factory.js)

    a restful object-oriented API library based on [restangular](https://github.com/mgonto/restangular)

- zhaimi.common.zhaimiPagination - [code](src/zhaimi_pagination/factory.js)

  a pagination depends zhaimi-rest and [ui-bootstrap](http://angular-ui.github.io/bootstrap/)

### TODO List
- [ ] zhaimi-auth: encapsulate angular-oauth2
- [ ] zhaimi-spinner: encapsulate sk-spinner
- [ ] zhaimi-uploader: encapsulate ng-file-upload