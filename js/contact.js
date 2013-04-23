/*JAVASCRIPT */
/*
jQuery delayed observer
(c) 2007 - Maxime Haineault (max@centdessin.com)
http://www.studio-cdd.com:8080/haineault/blog/17/
*/

jQuery.fn.extend(
	{
		delayedObserver:
			function(delay, callback)
				{
					$this = $(this);
        
					if (typeof window.delayedObserverStack == 'undefined') {
						window.delayedObserverStack = [];
					}


					if (typeof window.delayedObserverCallback == 'undefined') {
						window.delayedObserverCallback = function(stackPos) {
							observed = window.delayedObserverStack[stackPos];
							if (observed.timer) clearTimeout(observed.timer);
                
							observed.timer = setTimeout(function(){
								observed.timer = null;
								observed.callback(observed.obj.val(), observed.obj);
							}, observed.delay * 1000);

							observed.oldVal = observed.obj.val();
						}
					}

					window.delayedObserverStack.push(
						{
							obj: $this, timer: null, delay: delay,
							oldVal: $this.val(), callback: callback }
						);
							
						stackPos = window.delayedObserverStack.length-1;
					
					$this.keyup(function() {
						observed = window.delayedObserverStack[stackPos];
							if (observed.obj.val() == observed.obj.oldVal) return;
							else window.delayedObserverCallback(stackPos);
					});
				}
});

$(document).ready(function () {

	// username validation logic
	var validateusername = $('#validateusername');

	$('#username').delayedObserver(0.5, function () {
		// show our holding text in the validation message space
		validateusername.removeClass('formError').html('<img src="/images/ajax-loader.gif" height="16" width="16" style="border:none;" /> checking ...');
		
		$.ajax({
			url: '#',
			data: 'action=check_username&username=' + this.value,
			dataType: 'json',
			type: 'post',
			async: false,
			error: function (xhr, ajaxOptions, thrownError){
				validateusername.html('AJAX issue. ajaxOptions = ' + ajaxOptions + ', JSON: - ' + JSON.stringify(xhr) + ' - ');
			}, 
			success: function (j) {
				// put the 'msg' field from the $resp array from Checkusername (php code) in to the validation message
				validateusername.html(j.msg);
				if (j.ok)
				{
					validateusername.removeClass('formError');
					validateusername.addClass('formSuccess');
				} 
				else
				{
					validateusername.addClass('formError');
					validateusername.removeClass('formSuccess');
				}
			}
		});
	});

	var validateemail = $('#validateemail');
	
	$('#email').delayedObserver(0.5, function () {
		validateemail.removeClass('formError').html('<img src="/images/ajax-loader.gif" height="16" width="16" style="border:none;" /> checking ...');
		
		$.ajax({
			url: '#',
			data: 'action=check_email&email=' + this.value,
			dataType: 'json',
			type: 'post',
			async: true,
			error: function (xhr, ajaxOptions, thrownError){
				validateemail.html('AJAX issue. ajaxOptions = ' + ajaxOptions + ', JSON: - ' + JSON.stringify(xhr) + ' - ');
			}, 
			success: function (j) {
				validateemail.html(j.msg);
				if (j.ok)
				{
					validateemail.removeClass('formError');
					validateemail.addClass('formSuccess');
				} 
				else
				{
					validateemail.addClass('formError');
					validateemail.removeClass('formSuccess');
				}
			}
		});
	});

	var validatetelephone = $('#validatetelephone');
	
	$('#telephone').delayedObserver(0.5, function () {
		validatetelephone.removeClass('formError').html('<img src="/images/ajax-loader.gif" height="16" width="16" style="border:none;" /> checking ...');
		
		$.ajax({
			url: '#',
			data: 'action=check_telephone&telephone=' + this.value,
			dataType: 'json',
			type: 'post',
			async: false,
			error: function (xhr, ajaxOptions, thrownError){
				validatetelephone.html('AJAX issue. ajaxOptions = ' + ajaxOptions + ', JSON: - ' + JSON.stringify(xhr) + ' - ');
			}, 
			success: function (j) {
				validatetelephone.html(j.msg);
				if (j.ok)
				{
					validatetelephone.removeClass('formError');
					validatetelephone.addClass('formSuccess');
				} 
				else
				{
					validatetelephone.addClass('formError');
					validatetelephone.removeClass('formSuccess');
				}
			}
		});
	});
});