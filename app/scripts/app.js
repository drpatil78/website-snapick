'use strict';
//window.FixedSticky.tests.sticky = false;

/**
 * @ngdoc overview
 * @name websiteSnapickApp
 * @description
 * # websiteSnapickApp
 *
 * Main module of the application.
 */


angular
  .module('websiteSnapickApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-carousel'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
