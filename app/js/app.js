'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('loginApp', [
  'ngRoute',
  'loginApp.filters',
  'loginApp.services',
  'loginApp.directives',
  'loginApp.controllers'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
