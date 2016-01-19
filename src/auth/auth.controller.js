'use strict';
require('./auth.scss');

angular.module('app.auth').controller('AuthController', function(authService, $state) {
	var vm = this;
	vm.authService = authService;
	vm.login = function() {
		var name = vm.authService.name;
		vm.nameDanger = false;
		vm.passwordDanger = false;
		trim('name');
		trim('password');
		if (!name) {
			vm.nameDanger = true;
		}
		if (!vm.password) {
			vm.passwordDanger = true;
		}
		if (vm.nameDanger || vm.passwordDanger) {
			return;
		}
		
		authService.authenticate(this.password).then(function(authData) {
			localStorage.setItem('name', name);
			$state.go('home');
		}).catch(function(error) {
			vm.passwordDanger = true;
		});
	};
	function trim(prop) {
		if (vm[prop] && typeof vm[prop] === 'string') {
			vm[prop] = vm[prop].trim();
		}
	}
});
