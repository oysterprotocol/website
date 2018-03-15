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

      if ($('.countdown-timer-el').length) {
        countdownTiming();
      }

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


  function countdownTiming() {
    // Set the date we're counting down to
    var countDownTime = $('.countdown-timer-el').attr("data-date");
    var countDownDate = new Date(countDownTime).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            $('.countdown-timer-el').find('.date').text(days);
            $('.countdown-timer-el').find('.hour').text(hours);
            $('.countdown-timer-el').find('.minute').text(minutes);
            $('.countdown-timer-el').find('.second').text(seconds);

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
            }
    }, 1000);

  }
});

$(window).on('load', function () {
  $('html').addClass('activate');
});
