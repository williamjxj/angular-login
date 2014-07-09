'use strict';

/**
 * $http.post return:
 * data: object
 * config: data, headers, method, transformRequest, transformResponse, url (data/user.json)
 * headers: function
 * status: 200
 * statusText: "OK"
 */
angular.module('loginApp.services', [])
    .factory('loginService', function($http) {
        return {
            login: function(user, scope) {
                var $promise = $http.post('data/user.json'); //how to mock?
                $promise.then(function(msg) {
                    console.log(msg.data.account, msg.data.password);
                    if(msg.status === 200 && /test/i.test(msg.data.account)) scope.msgtxt = 'success login';
                    else scope.msgtxt = 'error login';
                })
            }
        }
    })
