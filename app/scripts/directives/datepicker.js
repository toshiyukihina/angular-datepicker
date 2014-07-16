'use strict';

angular.module('angularDatepickerApp')
  .directive('datepicker', ['$log', function ($log) {
    // 'ngModel'(4th argument) is set by 'require' property.
    var link = function(scope, element, attrs, ngModel) {
      $log.debug('* link');
      
      var updateModel = function(dateText) {
        $log.debug('* updateModel');
        scope.$apply(function() {
          $log.debug('* $apply@updateModel');
          ngModel.$setViewValue(dateText);
        });
      };

      ngModel.$render = function() {
        $log.debug('* $render');
        element.datepicker('setDate', ngModel.$viewValue || '');
      };

      var optionsObj = {};
      optionsObj.dateFormat = 'mm/dd/yy';
      optionsObj.onSelect = function(dateText, picker) {
        $log.debug('* onSelect');
        updateModel(dateText);
        if (scope.select) {
          scope.$apply(function() {
            $log.debug('* $apply@onSelect');
            // Invokes '$scope.updateMyText()' via select.
            scope.select({ date: dateText });
          });
        }
      };

      element.datepicker(optionsObj);
    };

    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        select: '&'
      },
      link: link
    };
  }]);
