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

  /* ALERTIFY */
  alertify.defaults = {
    ...alertify.defaults,
    theme: {
      ...alertify.defaults.theme,
      ok: "btn btn-danger",
      cancel: "btn btn-light",
    },
  };

  $("#alertify-open-btn").click(function () {
    alertify.confirm(
      "Here goes the title",
      "Here goes the text",
      function () {
        alertify.success("You confirmed");
      },
      function () {
        alertify.error("You cancelled");
      }
    );
  });

  /* SWEET ALERT */
  $("#swal-open-btn").click(function () {
    swal({
      title: "Here goes the title",
      text: "Here goes the text",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("You confirmed", {
          icon: "success",
        });
      } else {
        swal("You cancelled");
      }
    });
  });
});
