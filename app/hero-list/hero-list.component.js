'use strict';

//register `heroList` component and its template and controller
angular.
	module('heroList').
		component('heroList', {
			templateUrl: 'hero-list/hero-list.template.html',
			controller: function HeroListController($http) {
				var self = this;
				self.orderProp = 'year';

				$http.get('heroes/heroes.json').then(function(response){
					self.heroes = response.data;
				});
			}
		});
