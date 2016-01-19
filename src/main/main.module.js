'use strict';

module.exports = angular.module('main', ['app.auth', 'fb']).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: './main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
    });
    $urlRouterProvider.otherwise('/');
});
