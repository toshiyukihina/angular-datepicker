'use strict';

angular.module('angularDatepickerApp')
  .directive('datepicker', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        select: '&'
      },
      link: function postLink(scope, element, attrs, ngModel) {
        var optionsObj = {};

        optionsObj.dateFormat = 'mm/dd/yy';
        optionsObj.autoSize = false;

        var updateModel = function(dateText) {
          scope.$apply(function() {
            ngModel.$setViewValue(dateText);
          });
        };

        optionsObj.onSelect = function(dateText, picker) {
          updateModel(dateText);
          if (scope.select) {
            scope.$apply(function() {
              scope.select({date: dateText});
            });
          }
        };

        ngModel.$render = function() {
          element.datepicker('setDate', ngModel.$viewValue || '');
        };

        element.datepicker(optionsObj);
      }
    };
  });
