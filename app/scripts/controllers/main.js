'use strict';

angular.module('angularDatepickerApp')
  .controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.myText = 'Nothing selected';
    $scope.currentDate = '';
    $scope.updateMyText = function(date) {
      $log.debug('* updateMyText(' + date + ')');
      $scope.myText = 'Selected';
    };
  }]);
