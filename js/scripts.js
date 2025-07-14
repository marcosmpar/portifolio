"use strict";

$(function () {
  $(window).on("scroll", function () {
    $(window).scrollTop() > 100
      ? $("header").addClass("header-fixed")
      : $("header").removeClass("header-fixed");
  });
});
