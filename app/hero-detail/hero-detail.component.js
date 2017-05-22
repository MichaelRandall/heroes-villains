'use strict';

//register `heroList` component and its template and controller
angular.
	module('heroDetail').
		component('heroDetail', {
			template: 'TBD: Detail view for <span>{{$ctrl.hero_name}}</span>',
			controller: ['$routeParams',
				function HeroDetailController($routeParams) {
					this.hero_name = $routeParams.hero_name;
				}
			]
		});
