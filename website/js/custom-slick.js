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


});
