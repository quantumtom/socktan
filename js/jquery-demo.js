$(document).ready(function() {
	$.beautyOfCode.init({
		brushes: ["JScript"],
		ready: function() {
			$("#the-code").beautifyCode();
		}
	});
});