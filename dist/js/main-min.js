!function e(t,n,r){function i(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";!function(e,t,n,r,i,o,a){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,o=t.createElement(n),a=t.getElementsByTagName(n)[0],o.async=1,o.src=r,a.parentNode.insertBefore(o,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-43275048-4","auto"),ga("send","pageview")},{}],2:[function(e,t,n){"use strict";window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}()},{}],3:[function(e,t,n){e("./requestAnimationFrame.js");var r=function(e,t,n){function r(){a+=1/60}var i=e.offsetTop,o=window.scrollY,i=i||0,t=t||2e3,n=n||"easeOutSine",a=0,u=Math.max(.1,Math.min(Math.abs(o-i)/t,.8)),s={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}},c=a/u,l=s[n](c);1>c?(requestAnimFrame(r),window.scrollTo(0,o+(i-o)*l)):window.scrollTo(0,i),r()};t.exports.scrollToElement=r},{"./requestAnimationFrame.js":2}],4:[function(e,t,n){"use strict";var r=e("./helpers/googleAnalytics.js"),i=e("./helpers/scrollToElement.js"),o=function(){function e(){for(var e=document.querySelectorAll(".sidebar-link"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=e.target.getAttribute("href").replace("#",""),n=document.getElementById(t);n&&(e.preventDefault(),i(n,1500,"easeInOutQuint"))})}return{initialize:function(){var t="UA-43275048-4";r.initialize(t),e()}}}();t.exports.Main=o.initialize()},{"./helpers/googleAnalytics.js":1,"./helpers/scrollToElement.js":3}]},{},[4]);