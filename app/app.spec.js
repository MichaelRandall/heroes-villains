describe('HeroListController', function(){
	beforeEach(module('heroesvilliansApp'));
	
	it('should create a `heroes` model with 6 heroes', inject(function($controller){
		var scope = {};
		var ctrl = $controller('HeroListController', {$scope: scope});
		
		expect(scope.heroes.length).toBe(6);
	}));
});