$(document).bind("mobileinit", function() {
	
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