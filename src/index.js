'use strict';
require('./index.scss');
require('angular');
require('angular-resource');
require('angular-animate');
require('angular-ui-router');
require('angularfire');

angular.module('app', [
    'ui.router',
    'ngResource',
    'ngAnimate',
    'firebase',
    'loader'
]).config(function($locationProvider) {
    $locationProvider.html5Mode(true);
}).run(function($rootScope, $state, authService) {
    if (!authService.authData) {
        $state.transitionTo('auth');
    }

    $rootScope.$on('$stateChangeStart', function() {
        if (!authService.authData) {
            e && e.preventDefault();
            $state.transitionTo('auth');
        }
    });
});


require('./loader');
