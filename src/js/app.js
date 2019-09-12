import 'jquery';
import sayHello from './lib/sayHello.js';
import 'owl.carousel';
import 'owl.carousel2.thumbs';

var owl = $('.product-carousel');
owl.owlCarousel({
  loop: true,
  items: 1,
  thumbs: true,
  thumbImage: true,
  thumbContainerClass: 'owl-thumbs',
  thumbItemClass: 'owl-thumb-item',
});

function stopDefAction(evt) {
  evt.preventDefault();
}


// forgot password
$(document).on('click touchend', '#form__forgot', function(e) {
  e.preventDefault();
  $(this).parent('.form__group').slideUp(100);
  $('#form__forgot--helper').slideDown(100);
});

// filter open popup
$(document).on('click', '.filter__item', function(e) {
  e.stopPropagation();
  $('.filter__popup').slideUp(100);
  if (
    $(this)
      .find('.filter__popup')
      .is(':visible')
  ) {
    $(this)
      .find('.filter__popup')
      .slideUp(100)
      .removeClass('is-active');
  } else {
    $(this)
      .find('.filter__popup')
      .slideDown(100)
      .addClass('is-active');
  }
});
$(document).on('click', '.filter__popup', function(e) {
  if ($(this).hasClass('is-active')) {
    e.stopPropagation();
  }
});
$(window).click(function() {
  $('.filter__popup').slideUp(100);
});

// top shadow stick
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $('.top').addClass('top--stick');
  } else {
    $('.top').removeClass('top--stick');
  }
});

// profile nav
$(document).on('click', '.js--profile', function(e) {
  e.stopPropagation();
  let pnav = $('.js--profile-nav');
  if (!pnav.is(':visible')) {
    pnav.slideDown(100);
  } else {
    pnav.slideUp(100);
  }
});
$(window).click(function() {
  $('.js--profile-nav').slideUp(100);
});

// burger menu open
$(document).on('click', '.js--nav-burger', function() {
  $('.js--nav').addClass('navigation--is-open');
});
$(document).on('click', '.js--nav-close', function() {
  $('.js--nav').removeClass('navigation--is-open');
});

// contact more map btn
$(document).on('click', '.js--contact-more', function(e) {
  //console.log($(this));
  let map = $(this)
    .parent()
    .parent()
    .find('.contact__more-map');
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    map.slideUp();
    $(this).text('Смотреть на карте');
  } else {
    $(this).addClass('active');
    map.slideDown();
    $(this).text('Свернуть');
  }
  console.log(map);
});

// pti review carousel
$('.js--pti-review').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
      nav: true
    },
    576: {
      items: 1,
      stagePadding: 0,
      margin: 20,
      nav: false
    },
    992: {
      items: 1,
      stagePadding: 0,
      margin: 20,
      nav: false
    }
  }
});

// pti portfolio carousel
$('.js--pti-slider').owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
      nav: true
    },
    576: {
      items: 2,
      stagePadding: 0,
      margin: 20,
      nav: false
    },
    992: {
      items: 3,
      stagePadding: 0,
      margin: 20,
      nav: false
    }
  }
});

// product carousel
$('.js--pcslider-product').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0
    },
    576: {
      items: 2,
      stagePadding: 0,
      margin: 20
    },
    992: {
      items: 3,
      stagePadding: 0,
      margin: 20
    }
  }
});

// product carousel
$('.js--pcslider-product-width').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0
    },
    576: {
      items: 3,
      stagePadding: 0,
      margin: 20
    },
    992: {
      items: 4,
      stagePadding: 0,
      margin: 20
    }
  }
});

// tabs
$(document).on('click', '[data-tabs-nav]', function() {
  let nTab = $(this).data('tabs-nav');

  $('[data-tabs-nav]').removeClass('active');
  $('[data-tabs-content]').removeClass('active');

  $('[data-tabs-nav=' + nTab + ']').addClass('active');
  $('[data-tabs-content=' + nTab + ']').addClass('active');
});
