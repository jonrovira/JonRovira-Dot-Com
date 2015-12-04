'use strict';



angular
	.module('portfolioApp')
	.controller('DockCtrl', [
		'$scope', '$state',
		function ($scope, $state) {

			$scope.state = $state;

		}
	]);