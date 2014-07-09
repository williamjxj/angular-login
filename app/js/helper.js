angular.module('loginApp.helper', [])
    .value('debug', /(localhost|192\.168\.|127\.0\.0)/.test(location.host) && !!window.console)
    .factory('log', function() {
        return function() {
            return debug ? console.log.apply(console, arguments) : null;
        };
    })

