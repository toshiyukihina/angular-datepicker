'use strict';

angular.module('angularDatepickerApp')
  .controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.currentDate = '';
    $scope.myText = 'Nothing selected';
    // 'updateMyText()' will be invoked via directive 'datepicker'.
    $scope.updateMyText = function(date) {
      $log.debug('* updateMyText(' + date + ')');
      $scope.myText = 'Selected';
    };
  }]);
