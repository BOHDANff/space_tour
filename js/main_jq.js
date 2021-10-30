$(document).ready(function(){
  $('.slider').slick({

  	infinite: true,
  	speed: 800,
  	// dots: true,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	// centerMode: true,
  	// centerPadding: '80px',
  	prevArrow: '<img class="slider__arrow slider__arrow-prev" src="./images/arrov_prev.svg" alt="slider prevArrow">',
  	nextArrow: '<img class="slider__arrow slider__arrow-next" src="./images/arrov_next.svg" alt="slider nextArrow">',
  });
  $('.header__burger').click(function(event) {
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});