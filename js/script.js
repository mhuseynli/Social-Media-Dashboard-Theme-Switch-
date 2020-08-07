$(document).ready(function () {
  $(".switchmode").click(function () {
    $("body").toggleClass("body-light");
    $("header").toggleClass("header-light");
    $(".overall-item").toggleClass("overall-item-light");
    $(".overview-item").toggleClass("overview-item-light");
  });
});

