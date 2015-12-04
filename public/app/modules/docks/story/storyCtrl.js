'use strict';



angular
	.module('portfolioApp')
	.controller('StoryCtrl', [
		'$scope',
		function ($scope) {
			
			var w = window.innerHeight;
			var bo = 16;
			var h = 84;

			document.querySelector('article.story').style.height = w - bo - h + "px";


			$scope.stalkWithEyes = function (e) {
				var x = e.pageX;
				var y = e.pageY;

				var lEye = $('div#eye-left div.eye-color-1');
				var lEyeTop = lEye.offset().top;
				var lEyeLeft = lEye.offset().left;
				var lDTop = lEyeTop - y;
				var lDLeft = x - lEyeLeft;

				var rEye = $('div#eye-right div.eye-color-1');
				var rEyeTop = rEye.offset().top;
				var rEyeLeft = rEye.offset().left;
				var rDTop = rEyeTop - y;
				var rDLeft = x - rEyeLeft;

				var eyeCenter = [12, -2];

				var lEyeReq = getEyePos(lDLeft, lDTop);
				var rEyeReq = getEyePos(rDLeft, rDTop);

				var lEyeX = eyeCenter[0] + lEyeReq[0];
				var lEyeY = eyeCenter[1] - lEyeReq[1];
				var rEyeX = eyeCenter[0] + rEyeReq[0];
				var rEyeY = eyeCenter[1] - rEyeReq[1];

				lEye.css('left', lEyeX);
				lEye.css('top', lEyeY);
				rEye.css('left', rEyeX);
				rEye.css('top', rEyeY);
			};


			var getQuadrant = function (x, y) {
				if( x >= 0 && y >= 0 ) {
					return 1;
				}
				else if( x < 0 && y >= 0 ) {
					return 2;
				}
				else if( x < 0 && y < 0 ) {
					return 3;
				}
				else {
					return 4;
				}
			};


			var getAngle = function(x, y) {
				var quadrant = getQuadrant(x, y);
				var theta;

				switch( quadrant ) {
					case 1:
						theta = Math.atan(y/x);
						break;
					case 2:
						theta = Math.PI - Math.atan(y/(-1 * x));
						break;
					case 3:
						theta = Math.PI + Math.atan((-1 * y)/(-1 * x));
						break;
					case 4:
						theta = (2 * Math.PI) - Math.atan((-1 * y)/x);
						break;
				}

				return theta;
			};


			var getEyePos = function(x, y) {
				var position = [];

				var thetaMouse = getAngle(x, y);

				var xEye = 8 * Math.cos(thetaMouse);
				var yEye = 8 * Math.sin(thetaMouse);
				position = [xEye, yEye];

				return position;
			};



		}
	]);