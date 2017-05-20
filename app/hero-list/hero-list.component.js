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
						name: 'Clark Kent',
						year: 1938
					},{
						hero_name:'Wonder Woman',
						name: 'Diana Prince',
						year: 1941
					},{
						hero_name:'Spider-Man',
						name:'Peter Parker',
						year: 1962
					},{
						hero_name:'Iron-Man',
						name:'Tony Stark',
						year: 1963
					},{
						hero_name:'Hulk',
						name:'Bruce Banner',
						year: 1962
					},{
						hero_name:'Batman',
						name:'Bruce Wayne',
						year: 1939
					}
				];

				this.orderProp = 'year';
			}
		});
