'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
