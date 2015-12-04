'use strict';



angular
	.module('portfolioApp')
	.config([
		'$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/splash');

			$stateProvider
				.state('splash', {
					url: '/splash',
					templateUrl: '/public/app/modules/splash/splash.html',
					controller: 'SplashCtrl'
				})


				.state('dock', {
					url: '',
					abstract: true,
					templateUrl: '/public/app/templates/dock/dock.html',
					controller: 'DockCtrl'
				})
				.state('dock.work', {
					url: '/work',
					templateUrl: '/public/app/modules/docks/work/work.html',
					controller: 'WorkCtrl'
				})
				.state('dock.story', {
					url: '/story',
					templateUrl: '/public/app/modules/docks/story/story.html',
					controller: 'StoryCtrl'
				})
				.state('dock.contact', {
					url: '/contact',
					templateUrl: '/public/app/modules/docks/contact/contact.html',
					controller: 'ContactCtrl'
				})


				.state('spread', {
					url: '/spreads',
					abstract: true,
					templateUrl: '/public/app/templates/spread/spread.html'
				})
				.state('spread.rj', {
					url: '/rj',
					templateUrl: '/public/app/modules/spreads/rj/rj.html',
					controller: 'RjCtrl'
				})
				.state('spread.composite', {
					url: '/composite',
					templateUrl: '/public/app/modules/spreads/composite/composite.html',
					controller: 'CompositeCtrl'
				})
				.state('spread.noahAndChristina', {
					url: '/noah-and-christina',
					templateUrl: '/public/app/modules/spreads/noahAndChristina/noahAndChristina.html',
					controller: 'NoahAndChristinaCtrl'
				})
				.state('spread.theBook', {
					url: '/the-book',
					templateUrl: '/public/app/modules/spreads/theBook/theBook.html',
					controller: 'TheBookCtrl'
				});

		}
	]);



angular
	.module('portfolioApp')
	.run(function ($rootScope, $state) {
		$rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams) {
			console.log('$stateChangeError - fired when an error occurs during a transition');
		});
		$rootScope.$on('$stateNotFound', function (evt, unfoundState, fromState, fromParams){
		  	console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
		  	console.log(unfoundState, fromState, fromParams);
		});
	});