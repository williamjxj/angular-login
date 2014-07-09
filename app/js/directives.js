'use strict';

/* Directives */

angular.module('loginApp.directives', [])
    .directive('loginDirective', function() {
        return {
            templateUrl: 'partials/form.html'
        }
    });
