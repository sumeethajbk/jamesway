jQuery(document).ready(function () {

  /* Intro Slider */
  var windowWidth = jQuery(window).width();

  function introSlider() {
    var $introslide = jQuery('.intro-block-main');
    var introlist = $introslide.children().length;
    if (windowWidth <= 1023) {

      $introslide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        dots: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: false,
        autoplaySpeed: 0,

        cssEase: 'linear',
      });

    } else {

    }
  }
  introSlider();

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      introSlider();
    }
  });
  /* End of Intro slider */

  /* Intro  row Slider */
  var windowWidth = jQuery(window).width();

  function introSliders() {
    var $introslides = jQuery('.intro-block-row');
    var introlists = $introslides.children().length;
    if (windowWidth <= 1023) {

      $introslides.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        dots: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: false,
        autoplaySpeed: 0,

        cssEase: 'linear',
      });

    } else {

    }
  }
  introSliders();

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      introSliders();
    }
  });
  /* End of Intro row slider */


  /* prod  row Slider */
  var windowWidth = jQuery(window).width();

  function prodSliders() {
    var $prodslides = jQuery('.prod-block-row');
    var prodlists = $prodslides.children().length;
    if (windowWidth <= 1023) {

      $prodslides.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        dots: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: false,
        autoplaySpeed: 0,

        cssEase: 'linear',
      });

    } else {

    }
  }
  prodSliders();

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      prodSliders();
    }
  });
  /* End of Intro row slider */


  /* servcie  Slider */
  var windowWidth = jQuery(window).width();

  function serviceSlider() {
    var $serviceslide = jQuery('.services-block-main');
    var servicelist = $serviceslide.children().length;
    if (windowWidth <= 1023) {

      $serviceslide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        dots: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: false,
        autoplaySpeed: 0,
        adaptiveHeight: true,
        cssEase: 'linear',
      });

    } else {

    }
  }
  serviceSlider();
  

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      serviceSlider();
    }
  });
  /* End of service slider */


   /* testimo  Slider */
  var windowWidth = jQuery(window).width();

  function testimoSlider() {
    var $testimoslide = jQuery('.testimo-row');
    var testimolist = $testimoslide.children().length;
    if (windowWidth <= 1023) {

      $testimoslide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        dots: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: false,
        autoplaySpeed: 0,
        adaptiveHeight: true,
        cssEase: 'linear',
      });

    } else {

    }
  }
  testimoSlider();
  

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      testimoSlider();
    }
  });
  /* End of testimo slider */


   /* feature  Slider */
  var windowWidth = jQuery(window).width();

  function featureSlider() {
    var $featureslide = jQuery('.features-inner');
    var featurelist = $featureslide.children().length;
    if (windowWidth <= 1023) {

      $featureslide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        dots: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: false,
        autoplaySpeed: 0,
        adaptiveHeight: true,
        cssEase: 'linear',
      });

    } else {

    }
  }
  featureSlider();
  

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      testimoSlider();
    }
  });
  /* End of features slider */



  /* people  Slider */
  var windowWidth = jQuery(window).width();

  function peopleslider() {
    var $peopleslide = jQuery('.people-inner');
    var peoplelist = $peopleslide.children().length;
    if (windowWidth <= 1023) {

      $peopleslide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 2000,
        dots: true,
        arrows: false,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: false,
        autoplaySpeed: 0,
        adaptiveHeight: true,
        cssEase: 'linear',
      });

    } else {

    }
  }
  peopleslider();
  

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      peopleslider();
    }
  });
  /* End of people slider */



  


  /* Testimonial Slider */
  jQuery(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,
    infinite: false,
    speed: 1000,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-left"></i></span></div>',
    nextArrow: '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-right"></i></span></div>',
  });

  /* Logo Slider */
  var windowWidth = jQuery(window).width();

  function LogoSlider() {
    var $logoSlider = jQuery('.logo-slider-row');
    var logoslideCount = $logoSlider.children().length;
    if (windowWidth >= 1024) {
      if (logoslideCount > 3) {
        $logoSlider.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 5000,
          dots: false,
          arrows: true,
          variableWidth: true,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 100,
          autoplay: false,
          autoplaySpeed: 0,
          centerMode: true,
          centerPadding: ' 0',
          cssEase: 'linear',
          prevArrow: '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-left"></i></span></div>',
          nextArrow: '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-right"></i></span></div>',
        });
      }
    } else {
      $logoSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 5000,
        dots: false,
        arrows: true,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: false,
        autoplaySpeed: 0,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'linear',
        prevArrow: '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-left"></i></span></div>',
        nextArrow: '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-right"></i></span></div>',
      });
    }
  }
  LogoSlider();

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      LogoSlider();

    }
  });
  /* End of logo slider */

  /* Products Slider */
  jQuery('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.slider-nav'
  });
  jQuery('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    infinite: true,
  });

});
