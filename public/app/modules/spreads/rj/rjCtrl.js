'use strict';



angular
	.module('portfolioApp')
	.controller('RjCtrl', [
		'$scope', '$state', 
		function ($scope, $state) {
			
			$scope.state = $state;

		}
	]);