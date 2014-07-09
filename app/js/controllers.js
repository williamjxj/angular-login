'use strict';

/* Controllers */

var loginCtrl = angular.module('loginApp.controllers', []);

loginCtrl.controller('loginCtrl', ['$scope', 'loginService', function($scope, loginService) {
    $scope.login = function(user) {
        console.log('enter function');
        $scope.msgtxt = 'abcdefg';
        loginService.login(user, $scope);
    }
}]);

loginCtrl.controller('signUpCtrl', ['$scope', function($scope) {

}]);
