$(document).ready(() => {
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    // Get height of page sections.
    var activeElement = $('#home-link');
    var homePosition = $('#home').offset().top + ($('#home').height() / 2);
    var introPosition = $('#intro').offset().top + ($('#intro').height() / 2);
    var crPosition = $('#cr').offset().top + ($('#cr').height() / 2);
    var rlPosition = $('#rl').offset().top + ($('#rl').height() / 2);
    var eePosition = $('#ee').offset().top + ($('#ee').height() / 2);
    var scPosition = $('#sc').offset().top + ($('#sc').height() / 2);
    var utPosition = $('#ut').offset().top + ($('#ut').height() / 2);
    var kePosition = $('#ke').offset().top + ($('#ke').height() / 2);
    var vtPosition = $('#vt').offset().top + ($('#vt').height() / 2);
    var ftPosition = $('#ft').offset().top + ($('#ft').height() / 2);

    /*
    $(window).resize(() => {
        // Recalculate height of page sections.
        var activeElement = $('#home-link');
        var homeHeight = $('#home').height();
        var introHeight = $('#intro').height() + homeHeight;
        var crHeight = $('#cr').height() + introHeight;
        var rlHeight = $('#rl').height() + crHeight;
        var eeHeight = $('#ee').height() + rlHeight;
        var scHeight = $('#sc').height() + eeHeight;
        var utHeight = $('#ut').height() + scHeight;
        var keHeight = $('#ke').height() + utHeight;
        var vtHeight = $('#vt').height() + keHeight;
        var ftHeight = $('#ft').height() + vtHeight;
        var srcHeight = $('#src').height() + ftHeight;
    });
    */

    $(window).scroll(() => {
        var wScroll = $(window).scrollTop();

        if(wScroll <= homePosition) {
            if(!$('#home-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#home-link').addClass("nav__button--active");
                activeElement = $('#home-link');
            }
        } else if(wScroll > homePosition && wScroll <= introPosition) {
            if(!$('#intro-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#intro-link').addClass("nav__button--active");
                activeElement = $('#intro-link');
            }
        } else if(wScroll > introPosition && wScroll <= crPosition) {
            if(!$('#cr-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#cr-link').addClass("nav__button--active");
                activeElement = $('#cr-link');
            }
        } else if(wScroll > crPosition && wScroll <= rlPosition) {
            if(!$('#rl-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#rl-link').addClass("nav__button--active");
                activeElement = $('#rl-link');
            }
        } else if(wScroll > rlPosition && wScroll <= eePosition) {
            if(!$('#ee-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#ee-link').addClass("nav__button--active");
                activeElement = $('#ee-link');
            }
        } else if(wScroll > eePosition && wScroll <= scPosition) {
            if(!$('#sc-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#sc-link').addClass("nav__button--active");
                activeElement = $('#sc-link');
            }
        } else if(wScroll > scPosition && wScroll <= utPosition) {
            if(!$('#ut-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#ut-link').addClass("nav__button--active");
                activeElement = $('#ut-link');
            }
        } else if(wScroll > utPosition && wScroll <= kePosition) {
            if(!$('#ke-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#ke-link').addClass("nav__button--active");
                activeElement = $('#ke-link');
            }
        } else if(wScroll > kePosition && wScroll <= vtPosition) {
            if(!$('#vt-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#vt-link').addClass("nav__button--active");
                activeElement = $('#vt-link');
            }
        } else if(wScroll > vtPosition && wScroll <= ftPosition) {
            if(!$('#ft-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
                $('#ft-link').addClass("nav__button--active");
                activeElement = $('#ft-link');
            }
        } else if(wScroll > ftPosition) {
            if(!$('#src-link').hasClass("nav__button--active")) {
                activeElement.removeClass("nav__button--active");
            }
        }
    });
});