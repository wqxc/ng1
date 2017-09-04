(function() {
  'use strict';

/**
* @ngdoc directive
* @name zhaimi.common.directive:commonDirective
* @description
* # inputValidation
*   provide some validation function, based on the ngModelController's $validators work flow
*/

  angular.module('zhaimi.common.directive')
    .directive('inputValidation', inputValidation);

  function inputValidation() {
    function getValidateFunc(validateType, ctrl) {
      //inject ngModelController for validators
      var validateFunc = {
        'integer': integerValidate,
        'positiveInteger': positiveIntegerValidate,
        'orderId': isOrderId,
        'money': isMoney,
      };

      var positiveIntegerRegExp = /^\+?[1-9][0-9]*$/;
      var unNegativeIntegerRegExp = /^\+?[1-9][0-9]*$|0/;
      var moneyRegExp = /^[0-9]+(.[0-9]{1,2})?$/;

      return validateFunc[validateType];

      function integerValidate(modelValue, viewValue) {
        if (angular.isUndefined(modelValue) || modelValue === null) {
          //don't do the required check
          return true;
        }
        return unNegativeIntegerRegExp.test(viewValue);
      }

      function positiveIntegerValidate(modelValue, viewValue) {
        if (angular.isUndefined(modelValue) || modelValue === null) {
          //don't do the required check
          return true;
        }
        return positiveIntegerRegExp.test(viewValue);
      }

      function isOrderId(modelValue, viewValue) {
        //orderId cannot start with 0
        return positiveIntegerRegExp.test(viewValue) && viewValue.length === 18;
      }

      function moneyCheck(viewValue) {
        return moneyRegExp.test(viewValue);
      }

      function isMoney(modelValue, viewValue) {
        if (!viewValue) {
          return false;
        }
        var valid = moneyCheck(viewValue);
        if (!valid) {
          var pointerIndex = viewValue.indexOf('.');
          if (pointerIndex < 0) {
            return valid;
          } else {
            var pointerLength = viewValue.length - pointerIndex - 1;
            if (pointerLength > 2) {
              //let the input have no more than 2 decimal places
              viewValue = viewValue.slice(0, pointerIndex + 3)
              ctrl.$setViewValue(viewValue, 'input');
              ctrl.$render();
              // modelValue = modelValue.toFixed(2);
              return moneyCheck(viewValue);
            }
          }
        }
        return valid;
      }
    }

    var inputValidation = {
      restrict: 'A',
      require: 'ngModel',
      link: linkFunc,
    };
    return inputValidation;

    function linkFunc(scope, elem, attr, ctrl) {
      var validateType = attr['inputValidation'];
      var validator = getValidateFunc(validateType, ctrl);
      ctrl.$validators[validateType] = validator;
    }
  }
})();