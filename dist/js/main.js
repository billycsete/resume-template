
// var requestAnimationFrame = require('helpers/requestAnimationFrame');

// scroll it!
var scrollLinks = document.querySelectorAll('.sidebar-link');


// for (var i = 0; i < scrollLinks.length; i++) {
// 	scrollLinks[i].addEventListener('click', function(evt) {
// 		// get a reference to the element associated with the scroll to link that was clicked
// 		var id = evt.target.getAttribute('href');
// 		var element = document.getElementById(id);

// 		// if no matching element was found, exit now
// 		if (!element) {
// 			return;
// 		}

// 		// prevent the default anchor link jump
// 		evt.preventDefault();

// 		// scroll to the element
// 		scrollToElement(element, 1500, 'easeInOutQuint');
// 	});
// }

// Google analytics
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-43275048-4', 'auto');
// ga('send', 'pageview');



/**
 * requestionAnimationFrame shim
 * http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

// main function
function scrollToElement(element, speed, easing) {

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
		requestAnimFrame(update);
		window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
	} else {
		window.scrollTo(0, scrollTargetY);
	}

	// call it once to get started
	tick();
}


var update = function() {

}
