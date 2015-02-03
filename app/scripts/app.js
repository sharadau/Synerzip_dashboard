'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular.module('dashboardApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'chart.js'
  ]).config(function($stateProvider) {
    $stateProvider.state("dashboard", {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl',
      url: '/dashboard'
    }).state('organizations', {
      templateUrl: 'views/organizations.html',
      controller: 'OrganizationsCtrl',
      url: '/organizations'
    }).state('organizations.list', {
      templateUrl: 'views/organizations.list.html',
      controller: 'OrganizationsListCtrl',
      url: '/list'
    }).state('organizations.view', {
      templateUrl: 'views/organizations.view.html',
      controller: 'OrganizationsViewCtrl',
      url: '/view'
    }).state('organizations.edit', {
        templateUrl: 'views/organizations.edit.html',
        controller: 'OrganizationsEditCtrl',
        url: '/edit'
      }).state('project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        url: '/project'
      }).state('project.list', {
      templateUrl: 'views/project.list.html',
      controller: 'ProjectListCtrl',
      url: '/list'
      }).state('employee', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl',
        url: '/employee'
      })
  })
    .run(function($state){
      $state.go('dashboard');
    });
