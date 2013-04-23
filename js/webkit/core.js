function logGAValues() {
	
	var x;

	for (x in _gaq) {

		for (y in x) {

			f.log(_gaq[x], x[y]);
		
		}

	}

}

$(document).bind("mobileinit", function() {
		
	// Caching pages in the DOM
	
	$.mobile.page.prototype.options.domCache = true;
	
	$.extend(
		
		$.mobile, {

			defaultPageTransition: "slide",
			
			orientationChangeEnabled: false, 
			
			loadingMessage: "Loading...", 
		
			loadingMessageTextVisible: true, 

			loadingMessageTheme: "c"
			
		}	// .mobile
		
	);	// .extend
	
});

var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-2716088-8']);

_gaq.push(['_trackPageview']);

$(".ui-content").css("padding", function(index) {

	return index = 15;

});
	
(function() {

	var ga = document.createElement('script'); ga.type = 'application/javascript'; ga.async = true;

	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

	var s = document.getElementsByTagName('script')[0]; 

	s.parentNode.insertBefore(ga, s);

})();