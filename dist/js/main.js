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
var initialize = function(trackingID) {
	ga('create', trackingID, 'auto');
	ga('send', 'pageview');
};


module.exports.initialize = initialize;
/* jshint ignore:end */

},{}],2:[function(require,module,exports){
/**
 * requestionAnimationFrame shim
 * http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

'use strict';

window.requestAnimationFrame = (function() {
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

},{}],3:[function(require,module,exports){
'use strict';

// Add raf shim
require('./requestAnimationFrame.js');


/**
 * scrollToElement
 *
 * @description smooth scroll to an element
 * @param {Element} element - anchor link scroll to trigger
 * @param {Number} scrollSpeed - speed of scroll in milliseconds
 */
function scrollToElement(element, scrollSpeed) {

	var scrollTargetY = element.offsetTop || 0;
	var scrollY = window.scrollY;
	var speed = scrollSpeed || 2000;
	var currentTime = 0;

	// min time 0.1, max time 0.8 seconds
	var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

	// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	function easeOutSine(pos) {
		return Math.sin(pos * (Math.PI / 2));
	}

	// add animation loop
	function tick() {
		currentTime += 1 / 60;

		var p = currentTime / time;
		var t = easeOutSine(p);

		if (p < 1) {
			requestAnimationFrame(tick);
			window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
		} else {
			window.scrollTo(0, scrollTargetY);
		}
	}

	// call it once to get started
	tick();
}


module.exports = scrollToElement;

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
				scrollToElement(element, 1500);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaGVscGVycy9nb29nbGVBbmFseXRpY3MuanMiLCJzcmMvanMvaGVscGVycy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCJzcmMvanMvaGVscGVycy9zY3JvbGxUb0VsZW1lbnQuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogR29vZ2xlIEFuYWx5dGljc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1xuKGlbcl0ucT1pW3JdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9LGlbcl0ubD0xKm5ldyBEYXRlKCk7YT1zLmNyZWF0ZUVsZW1lbnQobyksXG5tPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG59KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJy8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcycsJ2dhJyk7XG5cblxuLy8gSW5pdCBhbmFseXRpY3NcbnZhciBpbml0aWFsaXplID0gZnVuY3Rpb24odHJhY2tpbmdJRCkge1xuXHRnYSgnY3JlYXRlJywgdHJhY2tpbmdJRCwgJ2F1dG8nKTtcblx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMuaW5pdGlhbGl6ZSA9IGluaXRpYWxpemU7XG4vKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuIiwiLyoqXG4gKiByZXF1ZXN0aW9uQW5pbWF0aW9uRnJhbWUgc2hpbVxuICogaHR0cDovL3d3dy5wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0ZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0fTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIEFkZCByYWYgc2hpbVxucmVxdWlyZSgnLi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMnKTtcblxuXG4vKipcbiAqIHNjcm9sbFRvRWxlbWVudFxuICpcbiAqIEBkZXNjcmlwdGlvbiBzbW9vdGggc2Nyb2xsIHRvIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIGFuY2hvciBsaW5rIHNjcm9sbCB0byB0cmlnZ2VyXG4gKiBAcGFyYW0ge051bWJlcn0gc2Nyb2xsU3BlZWQgLSBzcGVlZCBvZiBzY3JvbGwgaW4gbWlsbGlzZWNvbmRzXG4gKi9cbmZ1bmN0aW9uIHNjcm9sbFRvRWxlbWVudChlbGVtZW50LCBzY3JvbGxTcGVlZCkge1xuXG5cdHZhciBzY3JvbGxUYXJnZXRZID0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcblx0dmFyIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcblx0dmFyIHNwZWVkID0gc2Nyb2xsU3BlZWQgfHwgMjAwMDtcblx0dmFyIGN1cnJlbnRUaW1lID0gMDtcblxuXHQvLyBtaW4gdGltZSAwLjEsIG1heCB0aW1lIDAuOCBzZWNvbmRzXG5cdHZhciB0aW1lID0gTWF0aC5tYXgoMC4xLCBNYXRoLm1pbihNYXRoLmFicyhzY3JvbGxZIC0gc2Nyb2xsVGFyZ2V0WSkgLyBzcGVlZCwgMC44KSk7XG5cblx0Ly8gZWFzaW5nIGVxdWF0aW9ucyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW5yby9lYXNpbmctanMvYmxvYi9tYXN0ZXIvZWFzaW5nLmpzXG5cdGZ1bmN0aW9uIGVhc2VPdXRTaW5lKHBvcykge1xuXHRcdHJldHVybiBNYXRoLnNpbihwb3MgKiAoTWF0aC5QSSAvIDIpKTtcblx0fVxuXG5cdC8vIGFkZCBhbmltYXRpb24gbG9vcFxuXHRmdW5jdGlvbiB0aWNrKCkge1xuXHRcdGN1cnJlbnRUaW1lICs9IDEgLyA2MDtcblxuXHRcdHZhciBwID0gY3VycmVudFRpbWUgLyB0aW1lO1xuXHRcdHZhciB0ID0gZWFzZU91dFNpbmUocCk7XG5cblx0XHRpZiAocCA8IDEpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZICsgKChzY3JvbGxUYXJnZXRZIC0gc2Nyb2xsWSkgKiB0KSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxUYXJnZXRZKTtcblx0XHR9XG5cdH1cblxuXHQvLyBjYWxsIGl0IG9uY2UgdG8gZ2V0IHN0YXJ0ZWRcblx0dGljaygpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsVG9FbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ29vZ2xlQW5hbHl0aWNzICA9IHJlcXVpcmUoJy4vaGVscGVycy9nb29nbGVBbmFseXRpY3MuanMnKTtcbnZhciBzY3JvbGxUb0VsZW1lbnQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc2Nyb2xsVG9FbGVtZW50LmpzJyk7XG5cblxuLyoqXG4gKiBNYWluIEpTXG4gKi9cbnZhciBNYWluID0gKGZ1bmN0aW9uKCkge1xuXG5cblx0LyoqXG5cdCAqIFNldHVwIHNjcm9sbCB0byBzZWN0aW9uIHNpZGViYXIgbGlua3Ncblx0ICovXG5cdGZ1bmN0aW9uIGluaXRTZWN0aW9uU2Nyb2xsTGlua3MoKSB7XG5cblx0XHR2YXIgc2Nyb2xsTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1saW5rJyk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNjcm9sbExpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzY3JvbGxMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHQvLyBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBzY3JvbGwgdG8gbGluayB0aGF0IHdhcyBjbGlja2VkXG5cdFx0XHRcdHZhciBpZCA9IGV2dC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0XHRcdC8vIGlmIG5vIG1hdGNoaW5nIGVsZW1lbnQgd2FzIGZvdW5kLCBleGl0IG5vd1xuXHRcdFx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcHJldmVudCB0aGUgZGVmYXVsdCBhbmNob3IgbGluayBqdW1wXG5cdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQvLyBzY3JvbGwgdG8gdGhlIHNlY3Rpb24gcmVsYXRlZCB0byB0aGUgc2lkZWJhciBsaW5rIGNsaWNrZWRcblx0XHRcdFx0c2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIDE1MDApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBNYWluXG5cdCAqL1xuXHRyZXR1cm4ge1xuXHRcdGluaXRpYWxpemUgOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIHNldHVwIGdvb2dsZSBhbmFseXRpY3Ncblx0XHRcdHZhciBnb29nbGVBbmFseXRpY3NUcmFja2luZ0lEID0gJ1VBLTQzMjc1MDQ4LTQnO1xuXHRcdFx0Z29vZ2xlQW5hbHl0aWNzLmluaXRpYWxpemUoZ29vZ2xlQW5hbHl0aWNzVHJhY2tpbmdJRCk7XG5cdFx0XHQvLyBzZXR1cCBzaWRlYmFyIGxpbmtzXG5cdFx0XHRpbml0U2VjdGlvblNjcm9sbExpbmtzKCk7XG5cdFx0fSxcblx0fTtcblxuXG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cy5NYWluID0gTWFpbi5pbml0aWFsaXplKCk7XG4iXX0=
