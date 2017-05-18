describe('heroList', function(){

//Load module that contains the heroList component
	beforeEach(module('heroesvilliansApp'));
	
	describe('HeroListController', function(){
		if('should create a `heroes` model with 6 heroes', inject(function($componentController){
			var ctrl = $componentController('heroList');
			
			expect(ctrl.heroes.length).toBe(6);
		}));
	});
});