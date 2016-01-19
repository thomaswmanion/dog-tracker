'use strict';

angular.module('app.auth').service('authService', function(fb, $firebaseAuth, $state) {
    var self = this;
    self.auth = $firebaseAuth(fb.ref);
    self.name = localStorage.getItem('name');
    this.authenticate = function(password) {
        return self.auth.$authWithPassword({
            email: 'tomskytwo@gmail.com',
            password: password
        });
    };
    self.auth.$onAuth(function(authData) {
        if (authData) {
            self.authData = authData;
            self.showLoginScreen = false;
            $state.go('main');
        }
        else {
        	self.showLoginScreen = true;
        }
    });
});
