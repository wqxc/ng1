# MMT-frontend

- generator-gulp-angular
- gulp serve
- gulp build

## syntax

- Please use ES6 syntax!

## Styleguide

[Angular Styleguide](https://github.com/johnpapa/angular-styleguide)
[Javascript Styleguide](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)

Javascript使用`Jshint`进行Lint。

在实现某个功能时，请参考项目中已有代码对类似功能地实现方式来实现。如果能复用已有代码，请不要重复发明轮子。

## Testing

Running `grunt test` will run the unit tests with karma.

## 安装依赖项
`$ npm install`

`$ bower install`

遇到任何问题，请首先保证你的依赖项是up-to-date的。
`$ npm install`可能因为网络原因无法顺利完成，可以改用[cnpm](https://npm.taobao.org/)。

## Route

项目使用[ui-router](https://github.com/angular-ui/ui-router)而不是默认的`ngRoute`。
所以如果使用`$ yo angular:route myRoute`来产生新的route的话，需要在`app/scripts/appconfigs.js`中自行添加路由代码。

