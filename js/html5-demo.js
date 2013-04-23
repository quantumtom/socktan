$(document).ready(function() {
	var compatibilityMessage;
	
	compatibilityMessage = "That's odd. Seems like your web browser lacks support for HTML5.<br />";
	compatibilityMessage += "<a href=\"http://www.mozilla.com/en-US/products/download.html\">Try Firefox maybe?</a>";
	
	$.geolocation.find(
		function(location){
			$("#the-geocode").append(location.latitude+", "+location.longitude);
		}, 
		function(){
			$("#the-geocode").append(compatibilityMessage);
		}
	);
	
	var myvideo = {
		"ogg"	: "http://s3.socktan.com/video/demo/VIDEO0038.ogg" ,
/*
		"ogv"	: "http://s3.socktan.com/video/demo/VIDEO0038.ogv" ,
		"ogv"	: "http://s3.socktan.com/video/demo/VIDEO0038.ogv" ,
		"ogg"	: "http://s3.socktan.com/video/demo/VIDEO0038.ogg" ,
*/
		"h264"	: "http://s3.socktan.com/video/demo/VIDEO0038.mp4"
/*
		'webm': 'webmvideo.webm', 
		'flash': 'swfvideo.swf'
*/
	};
	
	var options = {
		"autoplay" : true , 
		"controls" : true , 
		"poster" : true , 
		"width" : 720 , 
		"height" : 480
	};

	$("#the-video").video(myvideo, options);

// flarevideo.com jQuery plug-in errs in FF 3.6.12 
/*
	fv = $("#the-video").flareVideo();

	fv.load([
		{
//			src:  'http://s3.socktan.com/video/demo/VIDEO0038.ogg',
			src:  '/video/VIDEO0038.ogg',
			type: 'video/ogg' , 
			height : 480 , 
			width : 720
		}
	]);
*/
});