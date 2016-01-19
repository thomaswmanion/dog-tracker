'use strict';

module.exports = angular.module('app.auth', ['fb']).config(function($stateProvider) {
    $stateProvider.state('auth', {
        url: '/auth',
        templateUrl: './auth/auth.html',
        controller: 'AuthController',
        controllerAs: 'auth'
    });
});
