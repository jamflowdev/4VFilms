(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').delay(1500).fadeOut(100);
  });

  // Sticky Menu
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // venobox popup 
  // $('.venobox').venobox();

  // dropdown menu
  var mobileWidth = 992;
  var navcollapse = $('.navbar .dropdown');
  $(window).on('resize', function () {
    navcollapse.children('.dropdown-menu').hide();
  });
  navcollapse.hover(function () {
    if ($(window).innerWidth() >= mobileWidth) {
      $(this).children('.dropdown-menu').stop(true, false, true).slideToggle(250);
    }
  });

  // Progress Bar
  $(window).on('load', function () {
    $('.progress-bar').each(function () {
      var width = $(this).data('percent');
      $(this).css({
        'transition': 'width 3s'
      });
      $(this).appear(function () {
        $(this).css('width', width + '%');
        $(this).find('.count').countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50
        });
      });
    });
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  // video iframe load
  $('.play-icon i').on('click', function () {
    var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });

  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });

  // clients logo slider
  $('.myslider').slick({
    centerMode: true,
    centerPadding: '200px',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerPadding: '130px',
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 991,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 400,
      settings: {
        centerMode: false,
      }
    },
    ]
  });
  
  $('.seeItToBeliveIt-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: '<span class="slick-prev"><svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.2681 2.05566L2.28333 24.0629L24.2681 46.5334" stroke="#FD6B60" stroke-width="3"/></svg></span>',
    nextArrow: '<span class="slick-next"><svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.38525 2.05566L23.37 24.0629L1.38525 46.5334" stroke="#FD6B60" stroke-width="3"/></svg></span>',
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },   
  ],
  });
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    // prevArrow: '<span class="slick-prev"><svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.2681 2.05566L2.28333 24.0629L24.2681 46.5334" stroke="#FD6B60" stroke-width="3"/></svg></span>',
    // nextArrow: '<span class="slick-next"><svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.38525 2.05566L23.37 24.0629L1.38525 46.5334" stroke="#FD6B60" stroke-width="3"/></svg></span>',
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },   
  ],
  });
  
  
  // testimonial slider
  var containerEl2 = document.querySelector('#slider');
  if (containerEl2) {
    window.slider = $('#slider').cardSlider({
      slideClass: 'slide',
      delay: 400,
      transition: 'ease'
    });
  }
  $('.testimonialsBlok').each(function () {
    var testimonialsBlokHeight = $(this).height()
    var testimonialsBlokWidth = $(this).width()
    $(this).find('iframe').height('100%')
    // $(this).find('iframe').width(testimonialsBlokWidth)
  });
  $('.video').each(function () {
    var videoWidth = $(this).width()
    // $(this).find('video').height(testimonialsBlokHeight)
    $(this).find('iframe').width(videoWidth)
  });
  var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });
})(jQuery);