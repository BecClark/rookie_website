$(document).ready(function() {

    // jQuery code here
    $('.nav-button').click(function() {
        $('nav').toggleClass('mobile-nav-active');
    });

    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();

      var element = $('.main').position().top+75;
      if ($('body').hasClass('home')) {
        var element = $('.main').position().top-50;
      }

      if (scroll > (element)) {
        $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      }
    });

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

});
