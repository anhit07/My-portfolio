angular.module('myPortfolioApp').directive('mhNavigation', mhNavigation);

function mhNavigation(){
	return {
		restrict: 'E',
		templateUrl: 'angular_app/navigation/navigation-directive.html'
	};
}