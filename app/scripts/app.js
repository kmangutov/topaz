'use strict';

$(document).foundation();

/**
 * @ngdoc overview
 * @name topazApp
 * @description
 * # topazApp
 *
 * Main module of the application.
 */
angular
  .module('topazApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
