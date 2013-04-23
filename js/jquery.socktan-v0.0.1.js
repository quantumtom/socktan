// This plugin performs a fade in/out effect on mouseover
(function($) {
	$.fn.addHoverFade = function(options) {
		// Use the default options 
		// if they haven't been overridden
		var myOptions = $.extend({}, $.fn.addHoverFade.defaults, options);

		return $(this)
			// Set the initial fade setting
			.fadeTo(myOptions.fadeSpeed, myOptions.opacityStart)

			// Wire up your new method
			.hover(
				function(){
					$(this).
						fadeTo(myOptions.fadeSpeed, myOptions.opacityFinish)
				},
				function(){
					$(this).
						fadeTo(myOptions.fadeSpeed, myOptions.opacityStart)
				});
			};

	// Initialize plugin defaults
	$.fn.addHoverFade.defaults = {
		fadeSpeed : "medium",
		opacityStart : "0.5",
		opacityFinish : "1.0"
	};
})(jQuery);

// This plugin toggles html class attributes with mouseover
(function($) {
	$.fn.addHoverClass = function(options) {
		var opts = $.extend({}, $.fn.addHoverClass.defaults, options);

		return $(this)
			.hover(
				function() {
					$(this).addClass(opts.cssClassName);
				},
				function() {
					$(this).removeClass(opts.cssClassName);
				}
			);
	};
	
	// plugin defaults
	$.fn.addHoverClass.defaults = {
		cssClassName : ""
	};
})(jQuery);