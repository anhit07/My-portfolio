angular.module('myPortfolioApp').controller('NavigationController', NavigationController);

function NavigationController($http, $location, $window) {
	var vm = this;

	vm.isActiveTab = function(url){
		var currentPath = $location.path().split('/')[1];
		return (url === currentPath ? 'active' : '');
	};
	vm.currentTab = function(url){
		var currentPath = $location.path().split('/')[1];
		return (url === currentPath ? '(current)' : '');
	}
}