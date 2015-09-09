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
