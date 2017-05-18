'use strict';

var heroesvilliansApp = angular.module('heroesvilliansApp', []);

heroesvilliansApp.controller('HeroListController', function HeroListController($scope) {
	$scope.heroes = [
		{
			hero_name:'Superman',
			name: 'Clark Kent'
		},{
			hero_name:'Wonder Woman',
			name: 'Diana Prince'
		},{
			hero_name:'Spider-Man',
			name:'Peter Parker'
		},{
			hero_name:'Iron-Man',
			name:'Tony Stark'
		},{
			hero_name:'Hulk',
			name:'Bruce Banner'
		},{
			hero_name:'Batman',
			name:'Bruce Wayne'
		}
	];
});



