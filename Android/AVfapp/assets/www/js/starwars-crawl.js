(function ($) {
	var intro = $('.intro'),
	    logo = $('.logo'),
	    logoImg = logo.find('images'),
	    audio = $('#starwars-theme'),
	    crawl = $('.crawl'),
	    transEndEventNames = {
		    'WebkitTransition' : 'webkitTransitionEnd',
		    'MozTransition'    : 'transitionend',
		    'OTransition'      : 'oTransitionEnd',
		    'msTransition'     : 'MSTransitionEnd',
		    'transition'       : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
	    
	$(function () {
		intro.bind(transEndEventName, function () {
			setTimeout(function () {
				audio[0].play();
				intro.removeClass('show');
				logo.addClass('show')
				logoImg.addClass('recede');
				
				logoImg.bind(transEndEventName, function () {
					logo.removeClass('show');
					crawl.addClass('play');
					crawl.bind(transEndEventName, function () {
						crawl.css('opacity', 0);
					});
				});
			}, 3000);
		});
		intro.addClass('show');
	});
});