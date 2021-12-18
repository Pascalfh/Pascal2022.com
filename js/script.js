//parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.95 + "%)",
  });

  $(".jumbotronindex img").css({
    transform: "translate(0px, " + wScroll / 1.9 + "%)",
  });

  $(".jumbotronindex h1").css({
    transform: "translate(0px, " + wScroll / 3 + "%)",
  });

  $(".jumbotronindex p").css({
    transform: "translate(0px, " + wScroll / 1.7 + "%)",
  });
});
