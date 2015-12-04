'use strict';



angular
	.module('portfolioApp')
	.controller('HeaderCtrl', [
		'$scope', '$state',
		function ($scope, $state) {
			
			$scope.state = $state;

		}
	]);