'use strict';



angular
	.module('portfolioApp')
	.controller('ContactCtrl', [
		'$scope',
		function ($scope) {
			
			var w = window.innerHeight;
			var bo = 16;
			var h = 84;

			document.querySelector('article.contact').style.height = w - bo - h + "px";


			$scope.colors = ["#E89C73", "#3EDCCE", "#7862DB", "#3BD463"];
			$scope.activeIndex = 0;

			$scope.changeColor = function (i) {
				$scope.activeIndex = i;
			};

		}
	]);