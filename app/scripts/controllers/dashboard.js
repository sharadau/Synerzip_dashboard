'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('DashboardCtrl', function ($scope, dashboardService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.labels = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday"];
    $scope.series = ['Billable', 'Bench'];

    var weeklyStats = dashboardService.getWeeklyStats();
    $scope.data = [weeklyStats.billable, weeklyStats.bench];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);

    };
    $scope.dougnutLabels = ["Billable", "Bench"];
    var dailyStats = dashboardService.getDailyStats();
    $scope.dougnutData = [dailyStats.billable, dailyStats.bench];
    $scope.dougnutSeries = ['Billable', 'Bench'];

    $scope.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.barSeries = ['Series A', 'Series B'];
    $scope.barSeries = ['Series A', 'Series B'];

    $scope.barData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

  });
