(function ($) {
    "use strict";

/*------------------------
window area start
---------------------------*/

    // Preloader

    $(window).on('load',function () {
      $('#biLoader').fadeOut();
      $('#biPreloaderBg')
          .delay(350)
          .fadeOut('slow');
      $('body')
          .delay(350);

      let biTheme = localStorage.getItem('theme');

      if (biTheme == "nightTheme") {

        $('body').addClass("night-theme")

      }
      
    });

/*------------------------
document area start
---------------------------*/     

  $(document).ready(function() {

    /*--------------------------
    show side sub-menu area start
    ------------------------------*/

    $("#side-menu").metisMenu();

 
    /*--------------------------
    show side sub-menu area end
    ------------------------------*/ 

    /*--------------------------
    show password area start
    ------------------------------*/ 

    $(".bi-eye-close").click(function() {
      $(this).toggleClass("ri-eye-off-line");
      let input = $(this).siblings(".password-field");
      input.attr("type", input.attr("type") === "password" ? "text" : "password");
    });

    /*--------------------------
    show password  area end
    ------------------------------*/ 

    /*--------------------------
    single img upload area  start
    ------------------------------*/ 

    $(document).on('change', '.file-input', function() {
      const imageInputFile = this;
      const imagePreviewSingle = $(imageInputFile).siblings('.avatar-preview');

      if (imageInputFile.files && imageInputFile.files[0]) {
          const reader = new FileReader();
          reader.onload = function(e) {
            imagePreviewSingle.attr('src', e.target.result).hide().fadeIn(650);
          };
          reader.readAsDataURL(imageInputFile.files[0]);
      }
  });

    /*--------------------------
   single img upload area  end
    ------------------------------*/ 

  /*------------------------
  toggle button show/hidden area start
  ---------------------------*/

  $(document).on('click', '.bi-toggle-menu', function() {
 
    $(".bi-side-bar").toggleClass("bi-show-menu");

  });

// collapse menu 

  $(document).on('click', '.bi-collapse-button', function() {

    $("body").toggleClass("bi-collapse-menu");

  });

// theme change button   

  $(document).on('click', '.bi-change-theme', function() {

    $("body").toggleClass("night-theme");

  });

  $(document).on('click', '.bi-night-theme', function() {
    localStorage.setItem('theme', 'nightTheme');
  });

  $(document).on('click', '.bi-light-theme', function() {
    localStorage.removeItem('theme')
  });



  /*------------------------
  toggle button show/hidden area end
  ---------------------------*/
        
  /*------------------------
  WOW area start
  ---------------------------*/

  new WOW().init();

  /*------------------------
  WOW area end
  ---------------------------*/

    });






})(jQuery);
