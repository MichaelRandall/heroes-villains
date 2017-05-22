'use strict';

//define `heroesvilliansApp` module
angular.
	module('heroesvilliansApp').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/heroes', {
					template:'<hero-list></hero-list>'
				}).
				when('/heroes/:hero_name', {
					template:'<hero-detail></hero-detail>'
				}).
				otherwise('/heroes');
		}
]);
