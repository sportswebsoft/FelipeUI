$(document).on("click", ".yamm .dropdown-menu", function (e) {
  e.stopPropagation();
});

$(function () {
  const updateMainNavbar = function () {
    if ($(window).width() < 992) {
      $("#ul-main-menu").removeClass("flex-row");
      $(".mobile-nav-link").addClass("nav-link");
    } else {
      $("#ul-main-menu").addClass("flex-row");
      $(".mobile-nav-link").removeClass("nav-link");
    }
  };

  // Call on first load
  updateMainNavbar();

  // Call again on every window resize
  $(window).resize(function () {
    updateMainNavbar();
  });
});
