'use strict';

angular.module('adsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'directive.g+signin'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/problemList.html',
        controller: 'ProblemsListCtrl'
      })
      .when('/problem/:problem_id', {
        templateUrl: 'views/problem.html',
        controller: 'ProblemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });