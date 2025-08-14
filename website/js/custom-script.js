jQuery(document).ready(function () {
  /* Fixed Header */
  jQuery(window).on("scroll", function () {
    var scroll = jQuery(this).scrollTop();
    if (scroll >= 2) {
      jQuery(".main_header").addClass("fixed-header");
    } else {
      jQuery(".main_header").removeClass("fixed-header");
    }
  });

  /* Menu */

  if (jQuery(window).width() <= 1023) {
    jQuery(".toggle_button").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(".mobile_menu").toggleClass("navOpen");
      jQuery(".main_header").toggleClass("menu-open");
      jQuery("html").toggleClass("no-scroll");
    });
    jQuery("ul.main_menu > li.menu-item-has-children > a").on(
      "click",
      function (event) {
        event.preventDefault();
        jQuery("ul.main_menu > li.menu-item-has-children > a")
          .not(jQuery(this))
          .removeClass("active");
        jQuery(this).toggleClass("active");
        jQuery(this).parent().siblings().find("ul.sub-menu").slideUp();
        jQuery(this).next("ul.sub-menu").slideToggle();
        jQuery(this).parent().siblings().toggleClass("sib");
      }
    );
    jQuery("ul.main_menu ul > li.menu-item-has-children > a").on(
      "click",
      function (event) {
        event.preventDefault();
        jQuery("ul.main_menu ul > li.menu-item-has-children > a")
          .not(jQuery(this))
          .removeClass("active");
        jQuery(this).toggleClass("active");
        jQuery(this).parent().siblings().find("ul.sub-menu").slideUp();
        jQuery(this)
          .siblings("ul.main_menu ul > li > ul.sub-menu")
          .slideToggle();
      }
    );
  }

  /* Accorrdion */
  jQuery(".accordion-item .accordion-heading").on("click", function (e) {
    e.preventDefault();
    if (jQuery(this).closest(".accordion-item").hasClass("active")) {
      jQuery(".accordion-item").removeClass("active");
    } else {
      jQuery(".accordion-item").removeClass("active");
      jQuery(this).closest(".accordion-item").addClass("active");
    }
    var jQuerycontent = jQuery(this).next();
    jQuerycontent.slideToggle(800);
    jQuery(".accordion-item .content").not(jQuerycontent).slideUp("800");
  });


  jQuery(document).ready(function () {
  jQuery('.resource-list-nav li a').on('click', function (e) {
    e.preventDefault();

    var target = jQuery(jQuery(this).attr('href'));
    if (target.length) {
      var headerHeight = jQuery('.main_header').outerHeight(true);
      var scrollTo = target.offset().top - headerHeight;

      jQuery('html, body').animate({
        scrollTop: scrollTo
      }, 600);
    }
  });

  if (jQuery(window).width() <= 767) {
    jQuery(document).on('click', '.heading_mobile_menu', function (e) {
      e.preventDefault();
      jQuery(this).toggleClass('active');
      jQuery('ul.resource-list-nav').slideToggle();
    });

    jQuery(document).on('click', '.resource-list-nav li a', function (e) {
      e.preventDefault();
      jQuery('.heading_mobile_menu').html(jQuery(this).html()).removeClass('active');
      jQuery('ul.resource-list-nav').slideUp();

      var href = jQuery(this).attr('href');
      if (href && href !== '#') window.location.href = href;
    });
  }

  /* Bottom Popup Slide*/
$(window).on('load', function () {
  if (window.location.href.indexOf("snap-tracker-knowledge-centre") > -1) {
    if ($('.overlay_main_sec').length > 0) {
      jQuery('body').addClass('pull_bottom');
      jQuery("html").addClass("no-scroll");
      jQuery('.overlay_main_sec').addClass('active');
      console.log("Showing popup");
    } else {
      // Clean up any stuck scroll block
      jQuery('body').removeClass('pull_bottom');
      jQuery('html').removeClass('no-scroll');
      console.log("Popup skipped (cookie exists)");
    }
  }
});


  jQuery('.pop_close').on('click', function (e) {
    e.preventDefault();
    window.location.href = 'https://stg-kispincl-stage.kinsta.cloud/';
  });

  jQuery("#requestFormhandler").on('click', function (e) {
    e.preventDefault();
    jQuery('.frm_forms.login-form').hide();
    jQuery('.request-form').show();
  });

    jQuery("#loginFormhandler").on('click', function (e) {
    e.preventDefault();
    jQuery('.request-form').hide();
     jQuery('.frm_forms.login-form').show();
  });
  
  // If login_error is present, remove it after showing the message once
  if (window.location.href.indexOf("login_error=1") > -1) {
    const url = new URL(window.location.href);
    url.searchParams.delete("login_error");

    // Use replaceState so it doesn't reload
    window.history.replaceState({}, document.title, url.pathname + url.search);
  }

if ($('.request-form .frm_error').length > 0) {
  $('.login-form').hide();
  $('.request-form').show();
  $("#frm_error_field_z7nvv").addClass("show_error");
}
if ($('.request-form .frm_message').length > 0) {
   $('.login-form').hide();
  $('.request-form').show();
   $(".frm_message").addClass("show_message");
}
});

  
  /* CTA Form */
  jQuery('.frm_form_field input, .frm_form_field textarea').on('input focus', function () {
    var inputLength = jQuery(this).val().length;
    if (inputLength > 0) {
      jQuery(this).addClass('input-has-value');
    } else {
      jQuery(this).removeClass('input-has-value');
    }
  });


  jQuery(".frm_forms .frm_form_fields input, .frm_forms .frm_form_fields textarea").on('focus', function () {
    jQuery(this).siblings(".frm_form_field").addClass("input-has-value");
    jQuery(this).parent(".frm_form_field ").removeClass("frm_blank_field");

    jQuery(this).siblings(".frm_error").hide();
  }).on('blur', function () {
    if (!jQuery(this).val()) {
      jQuery(this).siblings(".frm_form_field").removeClass("input-has-value");
      jQuery(this).siblings(".frm_error").show();
      jQuery(this).parent(".frm_form_field ").addClass("frm_blank_field");

    } else {
      jQuery(this).siblings(".frm_form_field").addClass("input-has-value");
      jQuery(this).parent(".frm_form_field ").removeClass("frm_blank_field");

      jQuery(this).siblings(".frm_error").hide();
    }
  });

  // Get OS
  var os = ['iphone', 'ipad', 'windows', 'mac', 'linux'];
  var match = navigator.appVersion
    .toLowerCase()
    .match(new RegExp(os.join("|")));
  if (match) {
    jQuery("body").addClass(match[0]);
  }
    
    if (jQuery(window).width() >= 768) {
    if (jQuery(".general-default-inner").length > 0) {
    jQuery(window).on("scroll", function () {
      var height = jQuery(".default-banner-section").outerHeight(true);
      var scroll = jQuery(this).scrollTop() + 150;
      if (scroll >= height) {
        jQuery(".general-default-inner").addClass("active");
      } else {
        jQuery(".general-default-inner").removeClass("active");
      }
    });
  }
        }


});

jQuery(function () {
  if (jQuery(window).width() <= 767) {
    jQuery('.filterlist').each(function () {
      let $li = jQuery(this).children('li'),
        $btn = $li.filter('.toggle-list'),
        $hidden = $li.slice(8, -1).hide();

      $btn.show().click(() => {
        $hidden.stop().fadeToggle(500);
        $btn.find('a').text($hidden.is(':visible') ? 'Show less' : 'Show more');
      });
    });
  }
});


