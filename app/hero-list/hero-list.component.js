'use strict';

//register `heroList` component and its template and controller
angular.
	module('heroList').
		component('heroList', {
			templateUrl: 'hero-list/hero-list.template.html',
			controller: function HeroListController() {
				this.heroes = [
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
			}
		});