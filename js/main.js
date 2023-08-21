$(function() {
	var menu_width = $('.side_menu').outerWidth();
	$('.hamburger_menu').on('click', function(){
		if(!$('body').hasClass('open')){
			$('body').css('right', '-'+menu_width+'px').addClass('open');
		}else{
			$('body').css('right', '0px').removeClass('open');
		}
	});
	

});