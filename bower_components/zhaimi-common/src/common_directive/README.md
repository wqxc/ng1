# zhaimi.common.directive

## Summary

Basic directives required by directives and services of zhaimi_common

## Directives

### [input-validation](input_validation/directive.js)
Useful user input validations for zhaimi front-end projects

- example

```html
<input input-validation="integer" required type="number" ng-model="inputValue">
```

- attention

  `THE ng-model ATTRIBUTE IS REQUIRED IF YOU WANNA USE THIS DIRECTIVE`

  read [this doc](http://ruiann.github.io/ngDirective/) if you want to know why

- supported values

  - integer

    validate whether the input is an unnegative integer

  - positiveInteger

    validate whether the input is an positive integer

  - orderId

    validate whether the input string by zhaimi order id rule, formed with 18 numbers

  - money

    validate the input string by money input, at most 2 demicals

### [zhaimi-date-picker](zhaimi_date_picker/directive.js)
Encapsulation for date picker component of [ui-bootstrap components](http://angular-ui.github.io/bootstrap/)

- example

```html
<span zhaimi-date-picker model="time" max="endTime" placeholder="起始时间"></span>
```

- attention

  `THE model ATTRIBUTE IS REQUIRED IF YOU WANNA USE THIS DIRECTIVE`

  **The model will be formatted as `yyyy-MM-dd` string** to interact with back-end

- attributes

  - model

    wrapper for ng-model

  - required

    wrapper for required

  - isOpen

    will this component opened by default

  - minDate/maxDate

    set the selectable scale

  - change

    wrapper for ng-change

### [zhaimi-datetime-picker](zhaimi_datetime_picker/directive.js)
Encapsulation for date picker component of [ui-bootstrap components](http://angular-ui.github.io/bootstrap/)

- example

```html
<span zhaimi-datetime-picker model="time" max="endTime" placeholder="起始时间"></span>
```

- attention

  `THE model ATTRIBUTE IS REQUIRED IF YOU WANNA USE THIS DIRECTIVE`

  **The model *won't* be formatted as `yyyy-MM-dd HH:mm:ss` string** to interact with back-end, read [this doc](http://ruiann.github.io/DateSupportForDifferentBrowser/) if you want to know why. So front-end must parse it to string when interact with back-end

- attributes

  the same as zhaimi-date-picker