'use strict';



angular
	.module('portfolioApp')
	.controller('SplashCtrl', [
		'$scope', '$state',
		function ($scope, $state) {

			var w = window.innerHeight;
			var bo = 16;
			
			document.querySelector('article.splash').style.height = w - bo+ "px";
			
			$scope.goToWork = function () {
				$state.go('dock.work');
			};

		}
	]);