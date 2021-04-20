(function ($) {
  $(document).ready(function () {
    /* HAMBURGER */
    $(".hamburger").on("click", function () {
      $(".hamburger").toggleClass("active");
      $(".side-widget").toggleClass("active");
      $(".section-wrapper").toggleClass("no-transform");
    });
  });

  // $(".uniquePreloader").addClass("page-loaded");
  // document.body.style.overflowY = "";

  // END DOCUMENT READY
})(jQuery);
