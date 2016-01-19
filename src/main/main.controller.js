'use strict';

angular.module('main').controller('MainController', function(authService, $state, fb, $firebaseArray) {
    var self = this;
    this.authService = authService;
    this.logout = function() {
        authService.auth.$unauth();
        $state.go('auth');
    };
    this.dogs = $firebaseArray(fb.ref.child('dogs'));

    this.save = function(dog) {
        dog.lastUpdater = self.authService.name;
        dog.lastUpdated = +new Date();
        self.dogs.$save(dog)
    };

    this.setDogLocation = function(dog, location) {
        dog.location = location;
        self.save(dog);
    }

    this.fed = function(dog) {
        dog.lastFed = +new Date();
        self.save(dog);
    }
});