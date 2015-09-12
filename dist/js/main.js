(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Google Analytics
 */

'use strict';

/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// Init analytics
ga('create', 'UA-43275048-4', 'auto');
ga('send', 'pageview');

/* jshint ignore:end */

},{}],2:[function(require,module,exports){
/**
 * requestionAnimationFrame shim
 * http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

'use strict';

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

},{}],3:[function(require,module,exports){
// Add raf shim
require('./requestAnimationFrame.js');


// main function
var scrollToElement = function(element, speed, easing) {

	var scrollTargetY = element.offsetTop;
	// scrollTargetY: the target scrollY property of the element
	// speed: time in pixels per second
	// easing: easing equation to use

	var scrollY = window.scrollY;
	var scrollTargetY = scrollTargetY || 0;
	var speed = speed || 2000;
	var easing = easing || 'easeOutSine';
	var currentTime = 0;

	// min time 0.1, max time .8 seconds
	var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

	// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	var easingEquations = {
		easeOutSine: function(pos) {
			return Math.sin(pos * (Math.PI / 2));
		},
		easeInOutSine: function(pos) {
			return (-0.5 * (Math.cos(Math.PI * pos) - 1));
		},
		easeInOutQuint: function(pos) {
			if ((pos /= 0.5) < 1) {
				return 0.5 * Math.pow(pos, 5);
			}
			return 0.5 * (Math.pow((pos - 2), 5) + 2);
		}
	};

	// add animation loop
	function tick() {
		currentTime += 1 / 60;
	}

	var p = currentTime / time;
	var t = easingEquations[easing](p);

	if (p < 1) {
		requestAnimFrame(tick);
		window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
	} else {
		window.scrollTo(0, scrollTargetY);
	}

	// call it once to get started
	tick();
}


// var ModuleMame = function() {

// 	var privateData = 'private';

// 	function privateFunc() {
// 		// nothing can call this except itself
// 		console.log( 'this is private!' );
// 	}

// 	return {

// 		initialize : function( arg ) {
// 			this.arg = arg;
// 			privateFunc();
// 		},

// 		doSomethingCool : function() {

// 		}

// 	}

// });


module.exports.scrollToElement = scrollToElement;

},{"./requestAnimationFrame.js":2}],4:[function(require,module,exports){
'use strict';

var googleAnalytics  = require('./helpers/googleAnalytics.js');
var scrollToElement = require('./helpers/scrollToElement.js');


/**
 * Main JS
 */
var Main = (function() {


	/**
	 * Setup scroll to section sidebar links
	 */
	function initSectionScrollLinks() {

		var scrollLinks = document.querySelectorAll('.sidebar-link');

		for (var i = 0; i < scrollLinks.length; i++) {
			scrollLinks[i].addEventListener('click', function(evt) {
				// get a reference to the element associated with the scroll to link that was clicked
				var id = evt.target.getAttribute('href').replace('#', '');
				var element = document.getElementById(id);
				// if no matching element was found, exit now
				if (!element) {
					return;
				}
				// prevent the default anchor link jump
				evt.preventDefault();
				// scroll to the section related to the sidebar link clicked
				scrollToElement(element, 1500, 'easeInOutQuint');
			});
		}
	}


	/**
	 * Initialize Main
	 */
	return {
		initialize : function() {
			// setup google analytics
			var googleAnalyticsTrackingID = 'UA-43275048-4';
			googleAnalytics.initialize(googleAnalyticsTrackingID);
			// setup sidebar links
			initSectionScrollLinks();
		},
	};


})();

module.exports.Main = Main.initialize();

},{"./helpers/googleAnalytics.js":1,"./helpers/scrollToElement.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaGVscGVycy9nb29nbGVBbmFseXRpY3MuanMiLCJzcmMvanMvaGVscGVycy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJzcmMvanMvaGVscGVycy9zY3JvbGxUb0VsZW1lbnQuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEdvb2dsZSBBbmFseXRpY3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbihmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcbihpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxubT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxufSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpO1xuXG4vLyBJbml0IGFuYWx5dGljc1xuZ2EoJ2NyZWF0ZScsICdVQS00MzI3NTA0OC00JywgJ2F1dG8nKTtcbmdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG5cbi8qIGpzaGludCBpZ25vcmU6ZW5kICovXG4iLCIvKipcbiAqIHJlcXVlc3Rpb25BbmltYXRpb25GcmFtZSBzaGltXG4gKiBodHRwOi8vd3d3LnBhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0ZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0fTtcbn0pKCk7XG4iLCIvLyBBZGQgcmFmIHNoaW1cbnJlcXVpcmUoJy4vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzJyk7XG5cblxuLy8gbWFpbiBmdW5jdGlvblxudmFyIHNjcm9sbFRvRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNwZWVkLCBlYXNpbmcpIHtcblxuXHR2YXIgc2Nyb2xsVGFyZ2V0WSA9IGVsZW1lbnQub2Zmc2V0VG9wO1xuXHQvLyBzY3JvbGxUYXJnZXRZOiB0aGUgdGFyZ2V0IHNjcm9sbFkgcHJvcGVydHkgb2YgdGhlIGVsZW1lbnRcblx0Ly8gc3BlZWQ6IHRpbWUgaW4gcGl4ZWxzIHBlciBzZWNvbmRcblx0Ly8gZWFzaW5nOiBlYXNpbmcgZXF1YXRpb24gdG8gdXNlXG5cblx0dmFyIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcblx0dmFyIHNjcm9sbFRhcmdldFkgPSBzY3JvbGxUYXJnZXRZIHx8IDA7XG5cdHZhciBzcGVlZCA9IHNwZWVkIHx8IDIwMDA7XG5cdHZhciBlYXNpbmcgPSBlYXNpbmcgfHwgJ2Vhc2VPdXRTaW5lJztcblx0dmFyIGN1cnJlbnRUaW1lID0gMDtcblxuXHQvLyBtaW4gdGltZSAwLjEsIG1heCB0aW1lIC44IHNlY29uZHNcblx0dmFyIHRpbWUgPSBNYXRoLm1heCgwLjEsIE1hdGgubWluKE1hdGguYWJzKHNjcm9sbFkgLSBzY3JvbGxUYXJnZXRZKSAvIHNwZWVkLCAwLjgpKTtcblxuXHQvLyBlYXNpbmcgZXF1YXRpb25zIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2RhbnJvL2Vhc2luZy1qcy9ibG9iL21hc3Rlci9lYXNpbmcuanNcblx0dmFyIGVhc2luZ0VxdWF0aW9ucyA9IHtcblx0XHRlYXNlT3V0U2luZTogZnVuY3Rpb24ocG9zKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5zaW4ocG9zICogKE1hdGguUEkgLyAyKSk7XG5cdFx0fSxcblx0XHRlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbihwb3MpIHtcblx0XHRcdHJldHVybiAoLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogcG9zKSAtIDEpKTtcblx0XHR9LFxuXHRcdGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbihwb3MpIHtcblx0XHRcdGlmICgocG9zIC89IDAuNSkgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyhwb3MsIDUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDAuNSAqIChNYXRoLnBvdygocG9zIC0gMiksIDUpICsgMik7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGFkZCBhbmltYXRpb24gbG9vcFxuXHRmdW5jdGlvbiB0aWNrKCkge1xuXHRcdGN1cnJlbnRUaW1lICs9IDEgLyA2MDtcblx0fVxuXG5cdHZhciBwID0gY3VycmVudFRpbWUgLyB0aW1lO1xuXHR2YXIgdCA9IGVhc2luZ0VxdWF0aW9uc1tlYXNpbmddKHApO1xuXG5cdGlmIChwIDwgMSkge1xuXHRcdHJlcXVlc3RBbmltRnJhbWUodGljayk7XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkgKyAoKHNjcm9sbFRhcmdldFkgLSBzY3JvbGxZKSAqIHQpKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsVGFyZ2V0WSk7XG5cdH1cblxuXHQvLyBjYWxsIGl0IG9uY2UgdG8gZ2V0IHN0YXJ0ZWRcblx0dGljaygpO1xufVxuXG5cbi8vIHZhciBNb2R1bGVNYW1lID0gZnVuY3Rpb24oKSB7XG5cbi8vIFx0dmFyIHByaXZhdGVEYXRhID0gJ3ByaXZhdGUnO1xuXG4vLyBcdGZ1bmN0aW9uIHByaXZhdGVGdW5jKCkge1xuLy8gXHRcdC8vIG5vdGhpbmcgY2FuIGNhbGwgdGhpcyBleGNlcHQgaXRzZWxmXG4vLyBcdFx0Y29uc29sZS5sb2coICd0aGlzIGlzIHByaXZhdGUhJyApO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIHtcblxuLy8gXHRcdGluaXRpYWxpemUgOiBmdW5jdGlvbiggYXJnICkge1xuLy8gXHRcdFx0dGhpcy5hcmcgPSBhcmc7XG4vLyBcdFx0XHRwcml2YXRlRnVuYygpO1xuLy8gXHRcdH0sXG5cbi8vIFx0XHRkb1NvbWV0aGluZ0Nvb2wgOiBmdW5jdGlvbigpIHtcblxuLy8gXHRcdH1cblxuLy8gXHR9XG5cbi8vIH0pO1xuXG5cbm1vZHVsZS5leHBvcnRzLnNjcm9sbFRvRWxlbWVudCA9IHNjcm9sbFRvRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdvb2dsZUFuYWx5dGljcyAgPSByZXF1aXJlKCcuL2hlbHBlcnMvZ29vZ2xlQW5hbHl0aWNzLmpzJyk7XG52YXIgc2Nyb2xsVG9FbGVtZW50ID0gcmVxdWlyZSgnLi9oZWxwZXJzL3Njcm9sbFRvRWxlbWVudC5qcycpO1xuXG5cbi8qKlxuICogTWFpbiBKU1xuICovXG52YXIgTWFpbiA9IChmdW5jdGlvbigpIHtcblxuXG5cdC8qKlxuXHQgKiBTZXR1cCBzY3JvbGwgdG8gc2VjdGlvbiBzaWRlYmFyIGxpbmtzXG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0U2VjdGlvblNjcm9sbExpbmtzKCkge1xuXG5cdFx0dmFyIHNjcm9sbExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItbGluaycpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY3JvbGxMaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0c2Nyb2xsTGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0Ly8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Nyb2xsIHRvIGxpbmsgdGhhdCB3YXMgY2xpY2tlZFxuXHRcdFx0XHR2YXIgaWQgPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdFx0XHQvLyBpZiBubyBtYXRjaGluZyBlbGVtZW50IHdhcyBmb3VuZCwgZXhpdCBub3dcblx0XHRcdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgYW5jaG9yIGxpbmsganVtcFxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gc2Nyb2xsIHRvIHRoZSBzZWN0aW9uIHJlbGF0ZWQgdG8gdGhlIHNpZGViYXIgbGluayBjbGlja2VkXG5cdFx0XHRcdHNjcm9sbFRvRWxlbWVudChlbGVtZW50LCAxNTAwLCAnZWFzZUluT3V0UXVpbnQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgTWFpblxuXHQgKi9cblx0cmV0dXJuIHtcblx0XHRpbml0aWFsaXplIDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBzZXR1cCBnb29nbGUgYW5hbHl0aWNzXG5cdFx0XHR2YXIgZ29vZ2xlQW5hbHl0aWNzVHJhY2tpbmdJRCA9ICdVQS00MzI3NTA0OC00Jztcblx0XHRcdGdvb2dsZUFuYWx5dGljcy5pbml0aWFsaXplKGdvb2dsZUFuYWx5dGljc1RyYWNraW5nSUQpO1xuXHRcdFx0Ly8gc2V0dXAgc2lkZWJhciBsaW5rc1xuXHRcdFx0aW5pdFNlY3Rpb25TY3JvbGxMaW5rcygpO1xuXHRcdH0sXG5cdH07XG5cblxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMuTWFpbiA9IE1haW4uaW5pdGlhbGl6ZSgpO1xuIl19
