'use strict';

// Add raf shim
require('./requestAnimationFrame.js');


/**
 * scrollToElement
 *
 * @description smooth scroll to an element
 * @param {Element} element - anchor link scroll to trigger
 * @param {Number} speed - speed of scroll in milliseconds
 */
function scrollToElement(element, speed) {

	var scrollTargetY = element.offsetTop || 0;
	var scrollY = window.scrollY;
	var speed = speed || 2000;
	var currentTime = 0;

	// min time .1, max time .8 seconds
	var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

	// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	function easeOutSine(pos) {
		return Math.sin(pos * (Math.PI / 2));
	};

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
