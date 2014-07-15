'use strict';

angular.module('angularDatepickerApp')
  .directive('datepicker', ['$log', function ($log) {
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
          $log.debug('* updateModel');
          scope.$apply(function() {
            $log.debug('* $apply@updateModel');
            ngModel.$setViewValue(dateText);
          });
        };

        optionsObj.onSelect = function(dateText, picker) {
          $log.debug('* onSelect');
          updateModel(dateText);
          if (scope.select) {
            scope.$apply(function() {
              $log.debug('* $apply@onSelect');
              // Invokes '$scope.updateMyText()' via select.
              scope.select({date: dateText});
            });
          }
        };

        ngModel.$render = function() {
          $log.debug('* $render');
          element.datepicker('setDate', ngModel.$viewValue || '');
        };

        element.datepicker(optionsObj);
      }
    };
  }]);
