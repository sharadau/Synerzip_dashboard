'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.dashboard
 * @description
 * # dashboard
 * Service in the dashboardApp.
 */
angular.module('dashboardApp')
  .service('dashboardService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var weeklyStats = {
      billable: [65, 59, 80, 81, 56],
      bench: [28, 48, 40, 19, 86]
    };

    this.getWeeklyStats = function(){

      return weeklyStats;
    };

    this.getDailyStats = function () {
      return {
        billable: weeklyStats.billable[weeklyStats.billable.length -1],
        bench: weeklyStats.bench[weeklyStats.bench.length -1]
      };
    }
  });
