(function ($) {
    $(document).ready(function () {
  
      /* HAMBURGER */
      $('.hamburger').on('click', function () {
        $(".hamburger").toggleClass("active")
        $(".side-widget").toggleClass("active")
        $(".section-wrapper").toggleClass("no-transform")
      })
  
    });
    // END DOCUMENT READY
    console.log("FUCK2")
  })(jQuery);
  