
$(function () {

	$('.tabs a').click(function () {
		$(this).parents('.main').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.accordion__head').on('click', function () {
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false;
	});

	$('.toggle-filter').click(function () {
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('open');
		$('.box-product').toggleClass('full');
	})

	$('.toggle-menu').click(function () {
		$(this).toggleClass('active');
		$('.dropdown-content--menu').toggleClass('open');
	})

	$('.dropdown-content__title').click(function(){
		$(this).toggleClass('d-open');
	})

	$('.filter-checkbox').on('change',function() {
		var filter = this.value;
		var products = document.querySelectorAll('.product');
				
		for(var i = 0; i < products.length; i++) {
			if(products[i].classList.contains(filter)) {
				products[i].classList.toggle('fl-show');
			}
		}
	})

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
		to: function (value) {
			return '&#36;' + value;
		},
		from: function (value) {
			return value.replace('&#36;', '');
		}
	}
});
var skipValues = [
	document.getElementById('amount'),
	document.getElementById('amount1')
];

slider.noUiSlider.on('update', function (values, handle) {
	skipValues[handle].innerHTML = values[handle];
});