'use strict';

angular.module('angularDatepickerApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.myText = 'Nothing selected';
    $scope.currentDate = '';
    $scope.updateMyText = function(date) {
      $scope.myText = 'Selected';
    };
  }]);
