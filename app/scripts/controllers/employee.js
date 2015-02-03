'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:EmployeeCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('EmployeeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
