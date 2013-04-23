$(document).ready(function () {

	var htmChecking = '<img src="http://s3.socktan.com/images/ajax-loader.gif" height="16" width="16" /> checking ';
	var htmValidYes = '<img src="http://s3.socktan.com/images/validyes.png" /> ';
	var htmMessage = '';
	var htmError = '<img src="http://s3.socktan.com/images/validno.png" /> ';

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
			validateUsername.addClass('formChecking').html(htmChecking);
			
			// fire an ajax request in 1/5 of a second
			this.timer = setTimeout(function () {
				$.ajax({
					url: '#', 
					data: 'action=check_username&Username=' + t.value, 
					dataType: 'json', 
					type: 'post', 
					async: false, 
					error: function (xhr, ajaxOptions, thrownError){
						validateUsername.html('AJAX issue. ajaxOptions = ' + ajaxOptions + ', JSON: - ' + JSON.stringify(xhr) + ' - ');
					}, 
					success: function (j) {
						// put the 'msg' field from the $resp array from CheckUsername (php code) in to the validation message
						if (j.ok == "yes") validateUsername.html(htmValidYes + j.msg);
						if (j.ok == "no") validateUsername.html(htmError + j.msg);
						if (j.ok == "maybe") validateUsername.html(htmChecking + '"' + j.msg + '" ...');
					}
				});
			}, 2000);

			// copy the latest value to avoid sending requests when we don't need to
			this.lastValue = this.value;					
		}
	});

	var validateEmail = $('#validateEmail');
	
	$('#Email').keyup(function () {
		var t = this; 
		
		if (this.value != this.lastValue) {
							
			if (this.timer) clearTimeout(this.timer);
			
			validateEmail.addClass('formChecking').html(htmChecking);
			
			this.timer = setTimeout(function () {
				$.ajax({
					url: '#',
					data: 'action=check_email&Email=' + t.value,
					dataType: 'json',
					type: 'post',
					async: false,
					error: function (xhr, ajaxOptions, thrownError){
						validateEmail.html('AJAX issue. ajaxOptions = ' + ajaxOptions + ', JSON: - ' + JSON.stringify(xhr) + ' - ');
					}, 
					success: function (j) {
						if (j.ok == "yes") validateEmail.html(htmValidYes + j.msg);
						if (j.ok == "no") validateEmail.html(htmError + j.msg);
						if (j.ok == "maybe") validateEmail.html(htmChecking + '"' + j.msg + '" ...');
					}
				});
			}, 2000);

			this.lastValue = this.value;					
		}
	});

	var validateTelephone = $('#validateTelephone');
	
	// This prohibits the user from entering non-numeric chararcters in the telephone field.
	$('#Telephone').bind('keypress', function(e) { 
		return ( e.which!=8 && e.which!=0 && (e.which<48 || e.which>57)) ? false : true ;
	})
	
	$('#Telephone').keyup(function () {
		var t = this; 
		
		if (this.value != this.lastValue) {

			if (this.timer) clearTimeout(this.timer);
			
			validateTelephone.addClass('formChecking').html(htmChecking);
			
			this.timer = setTimeout(function () {
				$.ajax({
					url: '#',
					data: 'action=check_telephone&Telephone=' + t.value,
					dataType: 'json',
					type: 'post',
					async: false,
					error: function (xhr, ajaxOptions, thrownError){
						validateTelephone.html('AJAX issue. ajaxOptions = ' + ajaxOptions + ', JSON: - ' + JSON.stringify(xhr) + ' - ');
					}, 
					success: function (j) {
						if (j.ok == "yes") validateTelephone.html(htmValidYes + j.msg);
						if (j.ok == "no") validateTelephone.html(htmError + j.msg);
						if (j.ok == "maybe") validateTelephone.html(htmChecking + '"' + j.msg + '" ...');
					}
				});
			}, 2000);

			this.lastValue = this.value;					
		}
	});
});