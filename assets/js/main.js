(function ($) {
  "use strict";

  $(document).ready(function () {
    handleMobileMenu();
    // sliderHome();
    handleQuestion();
    handleTab();
    handleCategories();
    handleMaxlength();
    handleMaxlengthBlog();
  });
  function handleMobileMenu() {
    $(".menu_toggler").click(function () {
      $(".header__all-active").toggleClass("show");
    });
    $(".remove__show").click(function () {
      $(".header__all-active").removeClass("show");
    });
  }

  function handleQuestion() {
    $(".content__questions-title").click(function () {
      $(this).toggleClass("active");
      $(this).find(".content__questions-toggler").toggleClass("active");
      $(this).next().toggleClass("show");
    });
  }
  function handleTab() {
    $("#tabs-nav li:first-child").addClass("active");
    $(".tab-content").hide();
    $(".tab-content:first-child").show();

    $("#tabs-nav li").click(function () {
      $("#tabs-nav li").removeClass("active");
      $(this).addClass("active");
      $(".tab-content").hide();

      const activeTab = $(this).find("a").attr("href");
      $(activeTab).fadeIn();
      return false;
    });
  }
  function handleCategories() {
    $(".game__title-img").click(function () {
      $(".categories__right").toggleClass("show");
    });
  }
  function handleMaxlength() {
    $(".blog__title").each(function (i) {
      var len = $(this).text().trim().length;
      if (len > 50) {
        $(this).text($(this).text().substr(0, 50) + "...");
      } else {
        return $(this).html();
      }
    });
    $(".blog__text-1").each(function (i) {
      var len = $(this).text().trim().length;
      if (len > 80) {
        $(this).attr("data-origin", $(this).html());
        $(this).html(
          $(this).html().substr(0, 80) +
            "... " +
            "<a href='#' class='blog__btn'> See More</a>"
        );
      } else {
        return $(this).html();
      }
    });
    $(".blog__btn").click(function (e) {
      e.preventDefault();
      $(this).parent().html($(this).parent().attr("data-origin"));
    });
  }
  function handleMaxlengthBlog() {
    $(".blog__detail-right-title").each(function (i) {
      var len = $(this).text().trim().length;
      if (len > 40) {
        $(this).text($(this).text().substr(0, 40) + "...");
      } else {
        return $(this).html();
      }
    });
    $(".blog__detail-right-text-1").each(function (i) {
      var len = $(this).text().trim().length;
      if (len > 100) {
        $(this).attr("data-origin", $(this).html());
        $(this).html(
          $(this).html().substr(0, 100) +
            "... " +
            "<a href='#' class='blog__btn'> See More</a>"
        );
      } else {
        return $(this).html();
      }
    });
    $(".blog__btn").click(function (e) {
      e.preventDefault();
      $(this).parent().html($(this).parent().attr("data-origin"));
    });
  }
})(jQuery);

document
  .querySelector(".select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".select").classList.toggle("open");
  });
for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".select").querySelector(".select__trigger span").innerHTML =
        this.innerHTML;
    }
  });
}
window.addEventListener("click", function (e) {
  const select = document.querySelector(".select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
