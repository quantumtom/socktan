
$(document).ready(function () {
	// Username validation logic
	var validateUsername = $('#validateUsername');
	$('#Username').keyup(function () {
		// cache the 'this' instance as we need access to it within a setTimeout, where 'this' is set to 'window'
		var t = this; 
		
		// only run the check if the username has actually changed - also means we skip meta keys
		if (this.value != this.lastValue) {

			// the timeout logic means the ajax doesn't fire with *every* key press, i.e. if the user holds down
			// a particular key, it will only fire when the release the key.
							
			if (this.timer) clearTimeout(this.timer);
			
			// show our holding text in the validation message space
			validateUsername.removeClass('formError').html('<img src="/images/ajax-loader.gif" height="16" width="16" /> checking availability...');
			
			// fire an ajax request in 1/5 of a second
			this.timer = setTimeout(function () {
				$.ajax({
					url: 'index2.php',
					data: 'action=check_username&username=' + t.value,
					dataType: 'json',
					type: 'post',
					success: function (j) {
						// put the 'msg' field from the $resp array from check_username (php code) in to the validation message
						validateUsername.html(j.msg);
					}
				});
			}, 200);
			
			// copy the latest value to avoid sending requests when we don't need to
			this.lastValue = this.value;
		}
	});	
});
