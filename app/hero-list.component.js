'use strict';

angular.
	module('heroesvilliansApp').
		component('heroList', {
			template:
				'<ul>' +
					'<li ng-repeat="hero in $ctrl.heroes">' +
						'<span><b>{{hero.hero_name}}</b></span>' +
						'<p>a.k.a. <q>{{hero.name}}</q></p>' +
					'</li>' +
				'</ul>',
			controller: function HeroListController(){
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