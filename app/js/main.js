$(function() {

  // $('.dropdown-toggle').click(function (e) {
  //   if ($(document).width() > 768) {
  //     e.preventDefault();
  //     var url = $(this).attr('href');
  //     if (url !== '#') {
  //   window.location.href = url;
  //   }
  // }
  // });

  // $('.nav-link').on('click' function(){
  //   $('.dropdown-menu').toggleClass('dropdown-menu--active');
  // });


  // $('.header__country-item--hide').hide();
  // $('.header__country-item--hide-mobile').hide();

  $('.header__country-item--more').hide();
  $('.header__country-item--more-mobile').hide();

  $('#btnMore').on('click', function(){
    var effect = 'slide';
    var options = { direction: "right" };
    var duration = 500;
    // if ($(document).width() > 1200) {
    //   $('.header__country-item--more').toggle(400);
    //   $('#btnMore').hide(400);
    // }
    // $('.header__country-item--more').toggle(400);
    if ($(document).width() > 576) {
      $('.header__country-item--more').toggle(400);
      $('#btnClose').hide();
    }
    $('#btnMore').hide();
    $('#btnClose').show();
    if ($(document).width() < 576) {
      // $('.header__country-item--more').toggle(400);
      $('#btnMore').show();
    }
  });

  $('#btnClose').on('click', function () {
    var effect = 'slide';
    var options = { direction: "right" };
    var duration = 500;
      $('.header__country-item--more').toggle(400);
      $('#btnMore').show(400);
  });

  $('#btnMore').on('click', function () {
    var effect = 'slide';
    var options = { direction: "right" };
    var duration = 500;
    $('.header__country-item--more-mobile').toggle(400);
  });

  
  $('.aside__rubrics-title').on('click', function () {
    if ($(document).width() < 992){
      $(this).toggleClass('aside__rubrics-title--active');
      $('.aside__rubrics-list').slideToggle();
    }
  });

  // $("#button2").click(function () {

  //   // Set the effect type
  //   var effect = 'slide';

  //   // Set the options for the effect type chosen
  //   var options = { direction: "right" };

  //   // Set the duration (default: 400 milliseconds)
  //   var duration = 500;

  //   $('#myDiv').toggle(effect, options, duration);
  // });


  new Swiper('.main-slider__slider', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    // breakpoints: {
    //   1200: {
    //     slidesPerView: 1,
    //   },
    //   800: {
    //     slidesPerView: 1,
    //   },
    //   100: {
    //     slidesPerView: 1,
    //     effect: 'fade',
    //   },
    // },
    navigation: {
      nextEl: '.swiper-main-next',
      prevEl: '.swiper-main-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  new Swiper('.content__main-slider', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    // breakpoints: {
    //   1200: {
    //     slidesPerView: 1,
    //   },
    //   800: {
    //     slidesPerView: 1,
    //   },
    //   100: {
    //     slidesPerView: 1,
    //     effect: 'fade',
    //   },
    // },
    navigation: {
      nextEl: '.swiper-main-content-next',
      prevEl: '.swiper-main-content-prev',
    },
    pagination: {
      el: '.swiper-pagination-content',
      type: 'bullets',
      clickable: true,
    },
  });

  new Swiper('.school__slider--sixth', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 4500,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,
      },
      100: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-school--sixth-next',
      prevEl: '.swiper-school--sixth-prev',
    },
  });

  new Swiper('.school__slider--fifth', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,
      },
      100: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-school--fifth-next',
      prevEl: '.swiper-school--fifth-prev',
    },
  });

  new Swiper('.school__slider--fourth', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 4500,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,
      },
      100: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-school--fourth-next',
      prevEl: '.swiper-school--fourth-prev',
    },
  });

  new Swiper('.school__slider--third', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,
      },
      100: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-school--third-next',
      prevEl: '.swiper-school--third-prev',
    },
  });

  new Swiper('.school__slider--second', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 4500,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,
      },
      100: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-school--second-next',
      prevEl: '.swiper-school--second-prev',
    },
  });

  new Swiper('.school__slider--first', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,
      },
      100: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-school--first-next',
      prevEl: '.swiper-school--first-prev',
    },
  });

  new Swiper('.content__slider-vertical', {
    slidesPerView: 1,
    // spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
        // spaceBetween: 30,
      },
      800: {
        slidesPerView: 1,
        // spaceBetween: 30,
      },
      650: {
        slidesPerView: 1,
        // spaceBetween: 30,
      },
      100: {
        slidesPerView: 1,
        // spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-vertical-next',
      prevEl: '.swiper-vertical-prev',
    },
  });

  new Swiper('.content__slider', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,
      },
      100: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-content-next',
      prevEl: '.swiper-content-prev',
    },
  });

  new Swiper('.post__slider', {
    slidesPerView: 1,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 1,
      },
      100: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-post-next',
      prevEl: '.swiper-post-prev',
    },
  });

  new Swiper('.news__slider', {
    slidesPerView: 5,
    spaceBetween: 60,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      650: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '.swiper-news-next',
      prevEl: '.swiper-news-prev',
    },
  });

  new Swiper('.partners__slider', {
    slidesPerView: 5,
    spaceBetween: 60,
    // effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      100: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.swiper-partners-next',
      prevEl: '.swiper-partners-prev',
    },
  });


  $('.menu-nav').hide();


  $(window).scroll(function () {
    if ($(window).scrollTop() > 480) {
      $('.menu-nav').slideDown(800).fadeIn(100);
    } else {
      $('.menu-nav').slideUp(400).fadeOut(100);
    }
  });

  $('.works').scroll(function () {
    if ($('.works').scrollTop() > 50) {
      $('.works__tabs').css({
        'position': 'fixed',
        'top': '200px'
      }).fadeIn(600);
    } else {
      $('.works__tabs').css({
        'position': 'relative',
      }).fadeOut(400);
    }
  });

  $('.works__tabs-btn').on('click', function(){
    $('.works__tabs-btn').removeClass('works__tabs-btn--active');
    $(this).addClass('works__tabs-btn--active');
  });


  $(".menu-nav .header__logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  var mixer = mixitup('.works__items');

  var mixer = mixitup(containerEl, {
    selectors: {
      target: '.works__item'
    },
    animation: {
      duration: 2800
    }
  });



  
});