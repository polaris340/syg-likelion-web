
$(document).ready(function(){
	//adjust_height();
	
	//$(window).resize(adjust_height);
	



	$(document).on('click','#nav-main a, a.btn',function(){
		var target = $(this).attr('href');
		
		if(target.charAt(0)!='#') return false;
		$('body, html').animate({
			scrollTop:target=='#'?0:$(target).offset().top
		},500,'swing');
		
		return false;
	});


});

function adjust_height(){

	$('.row').each(function(){
		var maxHeight = 0;
		
		var cols = $(this).find('[class|="col"]');

		$(cols).each(function(){
			maxHeight = $(this)[0].scrollHeight > maxHeight ? $(this)[0].scrollHeight : maxHeight;

		});

		$(cols).height(maxHeight);

	});
	
	}