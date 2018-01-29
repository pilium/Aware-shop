// TABS(filters)

$(function(){

	$('.tabs a').click(function(){
		$(this).parents('.main').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	

});

   
