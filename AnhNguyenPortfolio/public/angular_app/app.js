angular.module('myPortfolioApp', ['ngRoute', 'angular-jwt', 'ngAnimate']).config(config).run(run);


function config($httpProvider, $routeProvider, $locationProvider){

	$locationProvider.hashPrefix('');//remove ! on url when submit on HTML5
	//$httpProvider.interceptors.push('AuthInterceptor');// add AuthInterceptor into http request

	$routeProvider
		.when('/home', {
			templateUrl: 'angular_app/home/home.html',
			access: {
				restricted: false
			}
		})
		.when('/portfolio', {
			templateUrl: 'angular_app/portfolio/portfolio.html',
			access: {
				restricted: false
			}
		})
		.when('/contact', {
			templateUrl: 'angular_app/contact/contact.html',
			controller: ContactController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.otherwise({
			redirectTo: '/home'
		});
}

function run($rootScope, $location, $window){

	//Listen on root scope on event route change start
	$rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
		if(nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token){
			event.preventDefault();
			$location.path('/');
		}
	})
}