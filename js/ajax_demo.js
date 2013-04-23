/*JAVASCRIPT */
/*
jQuery delayed observer
(c) 2007 - Maxime Haineault (max@centdessin.com)
http://www.studio-cdd.com:8080/haineault/blog/17/
*/

jQuery.fn.extend({
    delayedObserver:function(delay, callback){
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
        window.delayedObserverStack.push({
            obj: $this, timer: null, delay: delay,
            oldVal: $this.val(), callback: callback });
            
            stackPos = window.delayedObserverStack.length-1;
        
        $this.keyup(function() {
            observed = window.delayedObserverStack[stackPos];
                if (observed.obj.val() == observed.obj.oldVal) return;
                else window.delayedObserverCallback(stackPos);
        });
    }
});

$(document).ready(function () {
	var validateEmail = $('#validateEmail');
	
	$('#Email').delayedObserver(0.5, function () {
		validateEmail.removeClass('formError').html('<img src="/images/ajax-loader.gif" height="16" width="16" style="border:none;" /> checking ...');
		
		$.ajax({
			url: '#',
			data: 'action=check_email&Email=' + this.value,
			dataType: 'json',
			type: 'post',
			async: true,
			error: function (xhr, ajaxOptions, thrownError){
				validateEmail.html('AJAX issue. ajaxOptions = ' + ajaxOptions + ', JSON: - ' + JSON.stringify(xhr) + ' - ');
			}, 
			success: function (j) {
				validateEmail.html(j.msg);
				if (j.ok)
				{
					validateEmail.removeClass('formError');
					validateEmail.addClass('formSuccess');
				} 
				else
				{
					validateEmail.addClass('formError');
					validateEmail.removeClass('formSuccess');
				}
			}
		});
	});
});