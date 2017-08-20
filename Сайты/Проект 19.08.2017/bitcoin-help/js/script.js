$(document).ready(function(){

	$('.js-accordion__header').on('click', function(){
		$(this).parents('.js-accordion__item').toggleClass('active');
		if (!$(this).parents('.js-accordion__item').hasClass('active')) {
			$(this).next('.js-accordion__content').slideUp();
		} else {
			$(this).next('.js-accordion__content').slideDown();
		};
	});

	$('.js-scroll').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.datepicker-left').pickmeup({
		format  		: 'd.m.Y',
		mode    		: 'single',
		position		: 'bottom',
		hide_on_select	: true
	});

	$('.datepicker-right').pickmeup({
		format  		: 'd.m.Y',
		mode    		: 'single',
		position		: 'bottom',
		hide_on_select	: true,
		class_name      : 'pickmeup-right'
	});

	if($('div').is('#counts')){
		console.log('есть');
		var show = true;
		var countbox = '#counts';
		$(window).on('scroll load resize', function(){
			if(!show) return false;
			var w_top = $(window).scrollTop();
			var e_top = $(countbox).offset().top;
			var w_height = $(window).height();
			var d_height = $(document).height();
			var e_height = $(countbox).outerHeight();
			if(w_top + w_height - 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
				$('.spincrement').spincrement({
					thousandSeparator: ' ',
					decimalPoint: ',',
					duration: 1200
				});
				show = false;
			}
		});
	}

	var top_show = 150;
	var delay = 1000;
	$(window).scroll(function () {
		if ($(this).scrollTop() > top_show) $('.scroll-block').fadeIn();
		else $('.scroll-block').fadeOut();
	});
	$('.scroll-block').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});

});

var slideout = new Slideout({
	'panel': document.getElementById('panel'),
	'menu': document.getElementById('menu-mobile'),
	'padding': 256,
	'tolerance': 70,
	'side': 'right',
	'touch': false
});
document.querySelector('.menu-open').addEventListener('click', function() {
	$(this).children().toggleClass('is-active');
	slideout.toggle();
	return false;
});

function subsForm($this){
	$this.parents('.form').find('.form__overlay').fadeIn('slow');
	setTimeout(function(){$this.parents('.form').find('.form__overlay').fadeOut('slow')}, 5000);
}