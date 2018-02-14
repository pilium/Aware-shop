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

	$('.accordion__head').on('click', function(){
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
	});
});

const slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [0, 100],
	connect: true,
	step: 5,
	range: {
		'min': 0,
		'max': 100
	},
	format: {
		to: function ( value ) {
		  return '&#36;' + value;
		},
		from: function ( value ) {
		  return value.replace('&#36;', '');
		}
	  }
});
var skipValues = [
	document.getElementById('amount'),
	document.getElementById('amount1')
];

slider.noUiSlider.on('update', function( values, handle ) {
	skipValues[handle].innerHTML = values[handle];
});
