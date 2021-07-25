$(document).on("click", ".yamm .dropdown-menu", function (e) {
  e.stopPropagation();
});

$(function () {
  const updateMainNavbar = function () {
    if ($(window).width() < 992) {
      $("#top-ad-img").attr("src", "./assets/beaconsoccer-mobile.png");
      $("#middle-ad-img").attr("src", "./assets/themotzgroup-mobile.png");
      $(".ul-main-menu").removeClass("flex-row");
      $(".mobile-nav-link").addClass("nav-link");
    } else {
      $("#top-ad-img").attr("src", "./assets/beaconsoccer.png");
      $("#middle-ad-img").attr("src", "./assets/themotzgroup.jpg");
      $(".ul-main-menu").addClass("flex-row");
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

  const capitalizeFirstLetter = (input) => input.charAt(0).toUpperCase() + input.slice(1);

  /*Inner navigation*/
  $("#inner-nav .nav-link").click(function (event) {
    event.preventDefault();
    const currentContent = event.target.hash;

    $("#inner-nav .nav-link").removeClass("navigation-active");
    $(this).addClass("navigation-active");

    $("#current-content").text(capitalizeFirstLetter(currentContent.substring(1)));
  });

  /*Year select*/
  // Default value is 2021
  $("#selected-year").text("2021");

  // Handle onChange
  $("#year-select").change(function () {
    var selectedValue = $(this).val();
    $("#selected-year").text(selectedValue);
  });

  /*Toggles*/
  $("#toggle-top-ad").click(function () {
    if ($("#top-ad").is(":visible")) {
      $("#top-ad").addClass("d-none");
    } else {
      $("#top-ad").removeClass("d-none");
    }
  });

  $("#toggle-middle-ad").click(function () {
    if ($("#middle-ad").is(":visible")) {
      $("#middle-ad").addClass("d-none");
    } else {
      $("#middle-ad").removeClass("d-none");
    }
  });

  $("#toggle-panel-ad").click(function () {
    if ($("#panel-ad").is(":visible")) {
      $("#panel-ad").addClass("d-none");
      $("#col-main-content").removeClass("col-sm-9").addClass("col-sm-12");
    } else {
      $("#panel-ad").removeClass("d-none");
      $("#col-main-content").removeClass("col-sm-12").addClass("col-sm-9");
    }
  });
});
