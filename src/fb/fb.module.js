'use strict';

module.exports = angular.module('fb', ['firebase']).service('fb', function($firebaseAuth) {
	var Firebase = require('firebase');
	this.ref = new Firebase('https://dog-tracker.firebaseio.com');
});
