$( document ).ready(function() {
  $(function(){
      $('.nav-link').css('color', 'white');
      $('.navbar').addClass("navbar-dark");
      // if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      // $('#ios-notice').removeClass('hidden');
      // $('.parallax-container').height( $(window).height() * 0.5 | 0 );
      // } else {
      // $(window).resize(function(){
      //     var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
      //     $('.parallax-container').height(parallaxHeight);
      // }).trigger('resize');
      // $(window).resize(function(){
      //     var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
      //     $('.parallax-container-wide').height(parallaxHeight);
      // }).trigger('resize');
      // }
      
      if ($('.banner-new-ear-widget').length) {
          var height = $('.banner-new-ear-widget').height() + 'px';
          $(".navbar-with-top-banner-el").css("top", height);
      }

      $(window).scroll(function(event){
          var scroll = $(window).scrollTop();
          var minHeight = ($('.banner-new-ear-widget').length) ? $('.banner-new-ear-widget').height() : 0;
          if (scroll <= minHeight) {
              $('.navbar').removeClass("background-white");
              $('.nav-link').css('color', 'white');
              $('.nav-logo-img.full').removeClass('active');
              $('.nav-logo-img.white').addClass('active');
              $('.navbar').removeClass("navbar-light");
              $('.navbar').addClass("navbar-dark");
              $('.navbar').css('position', 'absolute');
              $('.navbar').css("top", height);
          } else {
              $('.navbar').addClass("background-white");
              $('.nav-link').css('color', '#0084E5');
              $('.nav-logo-img.full').addClass('active');
              $('.nav-logo-img.white').removeClass('active');
              $('.navbar').removeClass("navbar-dark");
              $('.navbar').addClass("navbar-light");
              $('.navbar').css('position', 'fixed');
              $('.navbar').css("top", 0);
          }
      });
      $('body').scrollspy({target: ".navbar", offset: 50});   
      $("#navbarsExampleDefault a").on('click', function(event) {
          if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 800, function(){
                  window.location.hash = hash;
              });
          }
      });
  });
});

$(window).on('load', function () {
  $('html').addClass('activate');
});
