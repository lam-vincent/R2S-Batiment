(function ($) {
    "use strict";
  
    $(document).ready(function () {
      // Spinner
      var spinner = function () {
        setTimeout(function () {
          if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
          }
        }, 1);
      };
      spinner();
  
      // WOW animations
      new WOW().init();
  
      // Sticky navbar
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
          $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
      });
  
      // Bootstrap Carousel
      const avisCarousel = document.querySelector('#avisCarousel');
      if (avisCarousel) {
        new bootstrap.Carousel(avisCarousel, {
          interval: 5000,
          ride: 'carousel'
        });
      }
  
      // Facts counter
      $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
      });
  
      // Back to top
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
  
      $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
      });
    });
  })(jQuery);
  