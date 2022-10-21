(function ($) {
  "use strict";

  $(document).ready(function () {
    sliderHome();
  });
  function sliderHome() {
    $(".slider__all").slick({
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }
})(jQuery);
