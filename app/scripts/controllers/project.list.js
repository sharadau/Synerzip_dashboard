'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectListCtrl
 * @description
 * # ProjectListCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
